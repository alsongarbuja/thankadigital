"use client";
import { useForm } from "@mantine/form";
import { FormWrapper } from "../../../_components/FormWrapper";
import {
  TeamMemberSchema,
  TeamMemberSchemaType,
} from "@/app/(admin)/utils/formSchema";
import { zodResolver } from "mantine-form-zod-resolver";
import { useParams } from "next/navigation";
import { apiCaller } from "@/helpers/apiCaller";
import { getFromLocalStorage } from "@/helpers/localstorage";
import { notifications } from "@mantine/notifications";
import { useEffect } from "react";
import { schemaToDataParser } from "@/helpers/schemaParser";
import { Button, Select, TextInput } from "@mantine/core";

export default function TeamEditPage() {
  const teamForm = useForm<TeamMemberSchemaType>({
    mode: "uncontrolled",
    validate: zodResolver(TeamMemberSchema),
  });
  const params = useParams();

  const handleSubmit = async (values: TeamMemberSchemaType) => {
    try {
      const res = await apiCaller(
        `/api/admin/teams/${params.teamId}`,
        "PATCH",
        200,
        values,
        {
          Authorization: `User ${getFromLocalStorage("thanka_email")}`,
        }
      );
      if (res.isGood) {
        notifications.show({
          title: "Team member updated successfully",
          message: "Team member has been updated successfully",
          color: "teal",
          fz: "lg",
        });
      } else {
        notifications.show({
          title: "Error updating team member",
          message: res.data.toString(),
          color: "red",
          fz: "lg",
        });
      }
    } catch (error: any) {
      notifications.show({
        title: "Error updating team member",
        message: error.toString(),
        color: "red",
        fz: "lg",
      });
    }
  };

  useEffect(() => {
    if (params.teamId) {
      (async () => {
        const res = await apiCaller(`/api/admin/teams/${params.teamId}`);

        if (res.isGood) {
          const data = schemaToDataParser(res.data.teams);
          teamForm.setValues(data);
        } else {
          notifications.show({
            title: "Error fetching team member",
            message: res.data.toString(),
            color: "red",
            fz: "lg",
          });
        }
      })();
    }
  }, [params.teamId]);

  return (
    <FormWrapper modelName="Team Member" method="PATCH">
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
          Update
        </Button>
      </form>
    </FormWrapper>
  );
}
