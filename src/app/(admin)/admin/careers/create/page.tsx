"use client";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { zodResolver } from "mantine-form-zod-resolver";

import { apiCaller } from "@/helpers/apiCaller";
import { getFromLocalStorage } from "@/helpers/localstorage";
import { FormWrapper } from "../../_components/FormWrapper";
import { Button, Select, TextInput } from "@mantine/core";
import { CareerSchema, CareerSchemaType } from "@/app/(admin)/utils/formSchema";

export default function CreateCareer() {
  const careerForm = useForm<CareerSchemaType>({
    mode: "uncontrolled",
    validate: zodResolver(CareerSchema),
  });

  const handleSubmit = async (values: CareerSchemaType) => {
    try {
      const res = await apiCaller("/api/admin/career", "POST", 200, values, {
        Authorization: `User ${getFromLocalStorage("thanka_email")}`,
      });
      if (res.isGood) {
        careerForm.reset();
        notifications.show({
          title: "Career created successfully",
          message: "Career has been created successfully",
          color: "teal",
          fz: "lg",
        });
      } else {
        notifications.show({
          title: "Error creating career",
          message: res.data.toString(),
          color: "red",
          fz: "lg",
        });
      }
    } catch (error: any) {
      notifications.show({
        title: "Error creating career",
        message: error.toString(),
        color: "red",
        fz: "lg",
      });
    }
  };

  return (
    <FormWrapper modelName="Career" method="POST">
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

        <Button type="submit" variant="filled" bg="red" w="100%">
          Create
        </Button>
      </form>
    </FormWrapper>
  );
}
