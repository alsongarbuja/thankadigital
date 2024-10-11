"use client";

import { useEffect } from "react";
import { Select, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { useFormState, useFormStatus } from "react-dom";

import { initialState } from "@/utils/data";
import { IUserScheme } from "@/server/models/user.model";
import { FormWrapper } from "../../_components/FormWrapper";
import { addUserAction, updateUserAction } from "@/server/actions/user.action";

export default function UserForm({
  data,
  isEdit = false,
}: {
  data?: IUserScheme;
  isEdit?: boolean;
}) {
  const [state, handleSubmit] = useFormState(
    isEdit ? updateUserAction : addUserAction,
    initialState
  );
  const { pending } = useFormStatus();

  useEffect(() => {
    if (!pending && state.isOk) {
      notifications.show({
        title: `User ${isEdit ? "updated" : "created"} successfully`,
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
      modelName="User"
      method={isEdit ? "PATCH" : "POST"}
      formAction={handleSubmit}
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
        label="Email"
        placeholder="Enter email"
        withAsterisk
        size="lg"
        type="email"
        name="email"
        required
        defaultValue={data?.email}
      />
      <TextInput
        label="Password"
        placeholder="Enter password"
        withAsterisk
        size="lg"
        required={!isEdit}
        type="password"
        name="password"
      />
      <Select
        label="Role"
        size="lg"
        withAsterisk
        allowDeselect={false}
        required
        defaultValue={data?.role ?? "admin"}
        data={["admin", "content-writer"]}
        name="role"
      />
      <p aria-live="polite" role="status" className="sr-only">
        {state?.message}
      </p>
    </FormWrapper>
  );
}
