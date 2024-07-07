import { getCareers } from "@/server/controllers/career.controller";
import { ListDataWrapper } from "../_components/ListDataWrapper";

export default async function CareerPage() {
  const careers = await getCareers("all");

  return (
    <ListDataWrapper
      hasActions
      title="Careers"
      cols={["TITLE", "SALARY", "LOCATION", "TYPE"]}
      createText="Add Career"
      createUrl="/admin/careers/create"
      data={JSON.parse(JSON.stringify(careers.careers))}
      deleteUrl="/api/admin/careers/"
      editUrl="/admin/careers/edit/"
    />
  );
}
