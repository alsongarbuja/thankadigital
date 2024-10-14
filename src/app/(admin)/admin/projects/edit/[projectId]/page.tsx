import { getProjectById } from "@/server/controllers/project.controller";
import ProjectForm from "../../_components/ProjectForm";

export default async function EditProject({
  params,
}: {
  params: { projectId: string };
}) {
  const project = await getProjectById(params.projectId);

  return <ProjectForm isEdit data={project} />;
}
