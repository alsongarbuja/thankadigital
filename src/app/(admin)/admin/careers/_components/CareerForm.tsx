"use client";

import { useEffect } from "react";
import { Select, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useFormState, useFormStatus } from "react-dom";

import { initialState } from "@/utils/data";
import { ICareerScheme } from "@/server/models/career.model";
import { FormWrapper } from "../../_components/FormWrapper";
import {
  addCareerAction,
  updateCareerAction,
} from "@/server/actions/career.action";

export default function CareerForm({
  data,
  isEdit = false,
}: {
  data?: ICareerScheme;
  isEdit?: boolean;
}) {
  const [state, handleSubmit] = useFormState(
    isEdit ? updateCareerAction : addCareerAction,
    initialState
  );
  const { pending } = useFormStatus();

  useEffect(() => {
    if (!pending && state.isOk) {
      notifications.show({
        title: `Career ${isEdit ? "updated" : "created"} successfully`,
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
      modelName="Career"
      method={isEdit ? "PATCH" : "POST"}
      formAction={handleSubmit}
      pending={pending}
    >
      {isEdit && <TextInput name="id" defaultValue={data?.id} hidden />}
      <TextInput
        label="Title"
        placeholder="Enter title"
        withAsterisk
        required
        size="lg"
        name="title"
        defaultValue={data?.title}
      />
      <TextInput
        label="Salary"
        placeholder="Enter salary"
        withAsterisk
        required
        size="lg"
        name="salary"
        defaultValue={data?.salary}
      />
      <TextInput
        label="Description"
        placeholder="Enter description"
        withAsterisk
        required
        size="lg"
        name="description"
        defaultValue={data?.description}
      />
      <TextInput
        label="Time"
        placeholder="Enter time"
        size="lg"
        name="time"
        defaultValue={data?.time}
      />
      <TextInput
        label="Experience"
        placeholder="Enter experience"
        size="lg"
        name="experience"
        defaultValue={data?.experience}
      />
      <Select
        label="Location"
        size="lg"
        withAsterisk
        required
        allowDeselect={false}
        data={["Remote", "On-site", "Hybrid"]}
        name="location"
        defaultValue={data?.location ?? "On-site"}
      />
      <Select
        label="Type"
        size="lg"
        withAsterisk
        required
        allowDeselect={false}
        name="type"
        defaultValue={data?.type ?? "Full Time"}
        data={["Full Time", "Part Time", "Internship", "Contract Based"]}
      />
      <Select
        label="Status"
        size="lg"
        allowDeselect={false}
        name="status"
        defaultValue={data?.status ?? "draft"}
        data={["published", "draft", "archieved"]}
      />
      <p aria-live="polite" role="status" className="sr-only">
        {state?.message}
      </p>
    </FormWrapper>
  );
}
