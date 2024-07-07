"use client";
import { useForm } from "@mantine/form";
import { useParams } from "next/navigation";
import { Button, Select, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { zodResolver } from "mantine-form-zod-resolver";

import { FormWrapper } from "../../../_components/FormWrapper";
import { apiCaller } from "@/helpers/apiCaller";
import { getFromLocalStorage } from "@/helpers/localstorage";
import { CareerSchema, CareerSchemaType } from "@/app/(admin)/utils/formSchema";
import { useEffect } from "react";
import { schemaToDataParser } from "@/helpers/schemaParser";

export default function EditCareer() {
  const careerForm = useForm<CareerSchemaType>({
    mode: "uncontrolled",
    validate: zodResolver(CareerSchema),
  });
  const params = useParams();

  const handleSubmit = async (values: CareerSchemaType) => {
    try {
      const res = await apiCaller(
        `/api/admin/career/${params.careerId}`,
        "PATCH",
        200,
        values,
        {
          Authorization: `User ${getFromLocalStorage("thanka_email")}`,
        }
      );
      if (res.isGood) {
        notifications.show({
          title: "Career updated successfully",
          message: "Career has been updated successfully",
          color: "teal",
          fz: "lg",
        });
      } else {
        notifications.show({
          title: "Error updating career",
          message: res.data.toString(),
          color: "red",
          fz: "lg",
        });
      }
    } catch (error: any) {
      notifications.show({
        title: "Error updating career",
        message: error.toString(),
        color: "red",
        fz: "lg",
      });
    }
  };

  useEffect(() => {
    if (params.careerId) {
      (async () => {
        const res = await apiCaller(`/api/admin/career/${params.careerId}`);

        if (res.isGood) {
          const data = schemaToDataParser(res.data.careers);
          careerForm.setValues(data);
        } else {
          notifications.show({
            title: "Error fetching career",
            message: res.data.toString(),
            color: "red",
            fz: "lg",
          });
        }
      })();
    }
  }, [params.careerId]);

  return (
    <FormWrapper modelName="Career" method="PATCH">
      <form
        onSubmit={careerForm.onSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <TextInput
          label="Title"
          placeholder="Enter title"
          withAsterisk
          size="lg"
          key={careerForm.key("title")}
          {...careerForm.getInputProps("title")}
        />
        <TextInput
          label="Salary"
          placeholder="Enter salary"
          withAsterisk
          size="lg"
          key={careerForm.key("salary")}
          {...careerForm.getInputProps("salary")}
        />
        <TextInput
          label="Description"
          placeholder="Enter description"
          withAsterisk
          size="lg"
          key={careerForm.key("description")}
          {...careerForm.getInputProps("description")}
        />
        <TextInput
          label="Time"
          placeholder="Enter time"
          size="lg"
          key={careerForm.key("time")}
          {...careerForm.getInputProps("time")}
        />
        <TextInput
          label="Experience"
          placeholder="Enter experience"
          size="lg"
          key={careerForm.key("experience")}
          {...careerForm.getInputProps("experience")}
        />
        <Select
          label="Location"
          size="lg"
          withAsterisk
          allowDeselect={false}
          defaultValue="On-site"
          data={["Remote", "On-site", "Hybrid"]}
          key={careerForm.key("location")}
          {...careerForm.getInputProps("location")}
        />
        <Select
          label="Type"
          size="lg"
          withAsterisk
          allowDeselect={false}
          defaultValue="Full Time"
          data={["Full Time", "Part Time", "Internship"]}
          key={careerForm.key("type")}
          {...careerForm.getInputProps("type")}
        />
        <Select
          label="Status"
          size="lg"
          allowDeselect={false}
          defaultValue="draft"
          data={["published", "draft", "archieved"]}
          key={careerForm.key("status")}
          {...careerForm.getInputProps("status")}
        />

        <Button type="submit" variant="filled" bg="red" w="100%">
          Update
        </Button>
      </form>
    </FormWrapper>
  );
}
