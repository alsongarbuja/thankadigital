import { getCareers } from "@/server/controllers/career.controller";
import { ListDataWrapper } from "../_components/ListDataWrapper";
import { deleteCareerAction } from "@/server/actions/career.action";

export default async function CareerPage() {
  const careers = await getCareers("all");

  return (
    <ListDataWrapper
      hasActions
      title="Careers"
      cols={[
        { label: "TITLE", key: "title" },
        { label: "SALARY", key: "salary" },
        { label: "LOCATION", key: "location" },
        { label: "TYPE", key: "type" },
      ]}
      createText="Add Career"
      createUrl="/admin/careers/create"
      data={JSON.parse(JSON.stringify(careers.careers))}
      deleteAction={deleteCareerAction}
      editUrl="/admin/careers/edit/"
    />
  );
}
