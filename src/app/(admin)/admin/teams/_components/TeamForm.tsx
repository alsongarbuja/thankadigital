"use client";

import { useEffect } from "react";
import { Select, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useFormState, useFormStatus } from "react-dom";

import { initialState } from "@/utils/data";
import { ITeamScheme } from "@/server/models/teams.model";
import { FormWrapper } from "../../_components/FormWrapper";
import { addTeamAction, updateTeamAction } from "@/server/actions/team.action";

export default function TeamForm({
  data,
  isEdit = false,
}: {
  data?: ITeamScheme;
  isEdit?: boolean;
}) {
  const [state, handleSubmit] = useFormState(
    isEdit ? updateTeamAction : addTeamAction,
    initialState
  );
  const { pending } = useFormStatus();

  useEffect(() => {
    if (!pending && state.isOk) {
      notifications.show({
        title: `Members ${isEdit ? "updated" : "created"} successfully`,
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
      modelName="Member"
      method={isEdit ? "PATCH" : "POST"}
      formAction={handleSubmit}
      pending={pending}
    >
      {isEdit && <TextInput name="id" defaultValue={data?.id} hidden />}
      <TextInput
        label="Name"
        name="name"
        defaultValue={data?.name}
        placeholder="Enter name"
        withAsterisk
        required
        size="lg"
      />
      <TextInput
        label="Position"
        placeholder="Enter position"
        name="position"
        defaultValue={data?.position}
        withAsterisk
        required
        size="lg"
      />
      <TextInput
        label="ImageUrl"
        placeholder="Enter image url"
        withAsterisk
        name="imageUrl"
        required
        defaultValue={data?.imageUrl}
        size="lg"
      />
      <Select
        label="Team Type"
        size="lg"
        withAsterisk
        allowDeselect={false}
        required
        name="team"
        defaultValue={data?.team ?? "Members"}
        data={["Core", "Members"]}
      />
      <p aria-live="polite" role="status" className="sr-only">
        {state?.message}
      </p>
    </FormWrapper>
  );
}
