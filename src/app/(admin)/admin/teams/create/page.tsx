"use client";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { zodResolver } from "mantine-form-zod-resolver";
import { Button, Select, TextInput } from "@mantine/core";

import { apiCaller } from "@/helpers/apiCaller";
import { FormWrapper } from "../../_components/FormWrapper";
import { getFromLocalStorage } from "@/helpers/localstorage";
import {
  TeamMemberSchema,
  TeamMemberSchemaType,
} from "@/app/(admin)/utils/formSchema";

export default function TeamCreatePage() {
  const teamForm = useForm<TeamMemberSchemaType>({
    mode: "uncontrolled",
    validate: zodResolver(TeamMemberSchema),
  });

  const handleSubmit = async (values: TeamMemberSchemaType) => {
    try {
      const res = await apiCaller("/api/admin/teams", "POST", 200, values, {
        Authorization: `User ${getFromLocalStorage("thanka_email")}`,
      });
      if (res.isGood) {
        teamForm.reset();
        notifications.show({
          title: "Team member created successfully",
          message: "Team member has been created successfully",
          color: "teal",
          fz: "lg",
        });
      } else {
        notifications.show({
          title: "Error creating team member",
          message: res.data.toString(),
          color: "red",
          fz: "lg",
        });
      }
    } catch (error: any) {
      notifications.show({
        title: "Error creating team member",
        message: error.toString(),
        color: "red",
        fz: "lg",
      });
    }
  };

  return (
    <FormWrapper modelName="Team Member" method="POST">
      <form
        onSubmit={teamForm.onSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <TextInput
          label="Name"
          placeholder="Enter name"
          withAsterisk
          size="lg"
          key={teamForm.key("name")}
          {...teamForm.getInputProps("name")}
        />
        <TextInput
          label="Position"
          placeholder="Enter position"
          withAsterisk
          size="lg"
          key={teamForm.key("position")}
          {...teamForm.getInputProps("position")}
        />
        <TextInput
          label="ImageUrl"
          placeholder="Enter image url"
          withAsterisk
          size="lg"
          key={teamForm.key("imageUrl")}
          {...teamForm.getInputProps("imageUrl")}
        />
        <Select
          label="Team Type"
          size="lg"
          withAsterisk
          allowDeselect={false}
          defaultValue="Core"
          data={["Core", "Members"]}
          key={teamForm.key("team")}
          {...teamForm.getInputProps("team")}
        />

        <Button type="submit" variant="filled" bg="red" w="100%">
          Create
        </Button>
      </form>
    </FormWrapper>
  );
}
