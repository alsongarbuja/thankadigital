"use client";
import { useForm } from "@mantine/form";
import { Button, Select, TextInput } from "@mantine/core";
import { zodResolver } from "mantine-form-zod-resolver";
import { notifications } from "@mantine/notifications";

import { UserSchema, UserSchemaType } from "@/app/(admin)/utils/formSchema";
import { FormWrapper } from "../../../_components/FormWrapper";
import { apiCaller } from "@/helpers/apiCaller";
import { getFromLocalStorage } from "@/helpers/localstorage";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { schemaToDataParser } from "@/helpers/schemaParser";

export default function EditUser() {
  const userForm = useForm<UserSchemaType>({
    mode: "uncontrolled",
    validate: zodResolver(UserSchema),
  });
  const params = useParams();

  const handleSubmit = async (values: UserSchemaType) => {
    try {
      const res = await apiCaller(
        `/api/admin/user/${params.userId}`,
        "PATCH",
        200,
        values,
        {
          Authorization: `User ${getFromLocalStorage("thanka_email")}`,
        }
      );
      if (res.isGood) {
        notifications.show({
          title: "User updated successfully",
          message: "User has been updated successfully",
          color: "teal",
          fz: "lg",
        });
      } else {
        notifications.show({
          title: "Error updating user",
          message: res.data.toString(),
          color: "red",
          fz: "lg",
        });
      }
    } catch (error: any) {
      notifications.show({
        title: "Error updating user",
        message: error.toString(),
        color: "red",
        fz: "lg",
      });
    }
  };

  useEffect(() => {
    if (params.userId) {
      (async () => {
        const res = await apiCaller(`/api/admin/user/${params.userId}`);

        if (res.isGood) {
          const data = schemaToDataParser(res.data.user);
          userForm.setValues(data);
        } else {
          notifications.show({
            title: "Error fetching user",
            message: res.data.toString(),
            color: "red",
            fz: "lg",
          });
        }
      })();
    }
  }, [params.userId]);

  return (
    <FormWrapper modelName="User" method="PATCH">
      <form
        onSubmit={userForm.onSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <TextInput
          label="Name"
          placeholder="Enter name"
          withAsterisk
          size="lg"
          key={userForm.key("name")}
          {...userForm.getInputProps("name")}
        />
        <TextInput
          label="Email"
          placeholder="Enter email"
          withAsterisk
          size="lg"
          type="email"
          key={userForm.key("email")}
          {...userForm.getInputProps("email")}
        />
        <TextInput
          label="Password"
          placeholder="Enter password"
          withAsterisk
          size="lg"
          type="password"
          key={userForm.key("password")}
          {...userForm.getInputProps("password")}
        />
        <Select
          label="Role"
          size="lg"
          withAsterisk
          allowDeselect={false}
          defaultValue="admin"
          data={["admin", "content-writer"]}
          key={userForm.key("role")}
          {...userForm.getInputProps("role")}
        />

        <Button type="submit" variant="filled" bg="red" w="100%">
          Update
        </Button>
      </form>
    </FormWrapper>
  );
}
