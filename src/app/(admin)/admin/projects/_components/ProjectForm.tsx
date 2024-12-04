"use client";

import { useEffect, useRef } from "react";
import { Select, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useFormState, useFormStatus } from "react-dom";

import { initialState } from "@/utils/data";
import { IProjectScheme } from "@/server/models/project.model";
import { FormWrapper } from "../../_components/FormWrapper";
import {
  addProjectAction,
  updateProjectAction,
} from "@/server/actions/project.action";
import CkEditor from "@/app/(admin)/_components/CKEditor";
import { Editor } from "ckeditor5";
import {
  ckEditorCorrector,
  ckEditorCorrectorReverse,
} from "@/utils/ckEditorCorrector";

export default function ProjectForm({
  data,
  isEdit = false,
}: {
  data?: IProjectScheme;
  isEdit?: boolean;
}) {
  const [state, handleSubmit] = useFormState(
    isEdit ? updateProjectAction : addProjectAction,
    initialState
  );
  const { pending } = useFormStatus();
  const ckRef = useRef<Editor>(null);

  const handleSubmitAction = async (formData: FormData) => {
    const newPayload = new FormData();
    const ckData = ckRef.current?.getData() as string;

    const d = ckEditorCorrector(ckData);

    newPayload.append("details", d);
    newPayload.append("name", formData.get("name") as string);
    newPayload.append("slug", formData.get("slug") as string);
    newPayload.append("summary", formData.get("summary") as string);
    newPayload.append("thumbnail", formData.get("thumbnail") as string);
    newPayload.append("tags", formData.get("tags") as string);

    if (formData.get("liveLink")) {
      newPayload.append("liveLink", formData.get("liveLink") as string);
    }
    if (formData.get("githubLink")) {
      newPayload.append("githubLink", formData.get("githubLink") as string);
    }
    newPayload.append("status", formData.get("status") as string);
    if (isEdit) {
      newPayload.append("id", formData.get("id") as string);
    }

    handleSubmit(newPayload);
  };

  useEffect(() => {
    if (!pending && state.isOk) {
      notifications.show({
        title: `Project ${isEdit ? "updated" : "created"} successfully`,
        message: state.message,
        color: "teal",
        fz: "lg",
      });
    }
    if (!pending && !state.isOk && state.message) {
      notifications.show({
        title: "Error",
        message: state.message,
        color: "red",
        fz: "lg",
      });
    }
  }, [pending, state, isEdit]);

  return (
    <FormWrapper
      modelName="Project"
      method={isEdit ? "PATCH" : "POST"}
      formAction={handleSubmitAction}
      pending={pending}
    >
      {isEdit && <TextInput name="id" defaultValue={data?.id} hidden />}
      <TextInput
        label="Name"
        placeholder="Enter name"
        withAsterisk
        size="lg"
        name="name"
        required
        defaultValue={data?.name}
      />
      <TextInput
        label="Slug"
        placeholder="Enter slug"
        withAsterisk
        size="lg"
        name="slug"
        required
        defaultValue={data?.slug}
      />
      <TextInput
        label="Thumbnail"
        placeholder="Enter thumbnail link"
        withAsterisk
        size="lg"
        name="thumbnail"
        required
        defaultValue={data?.thumbnail}
      />
      <TextInput
        label="Summary"
        placeholder="Enter summary"
        withAsterisk
        size="lg"
        name="summary"
        required
        defaultValue={data?.summary}
      />
      <TextInput
        label="Live link"
        placeholder="Enter live link"
        size="lg"
        name="liveLink"
        defaultValue={data?.liveLink || ""}
      />
      <TextInput
        label="Github link"
        placeholder="Enter github link"
        size="lg"
        name="githubLink"
        defaultValue={data?.githubLink || ""}
      />
      <TextInput
        label="Tags"
        placeholder="Add tags with comma separated"
        size="lg"
        name="tags"
        defaultValue={data?.tags.join(",")}
      />
      <CkEditor
        ref={ckRef}
        data={data?.details ? ckEditorCorrectorReverse(data?.details) : ""}
        label="Detail"
      />
      <Select
        label="status"
        size="lg"
        withAsterisk
        allowDeselect={false}
        required
        defaultValue={data?.status ?? "draft"}
        data={["draft", "published", "archieved"]}
        name="status"
      />
      <p aria-live="polite" role="status" className="sr-only">
        {state?.message}
      </p>
    </FormWrapper>
  );
}
