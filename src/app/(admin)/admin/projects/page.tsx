import { deleteProjectAction } from "@/server/actions/project.action";
import { ListDataWrapper } from "../_components/ListDataWrapper";
import { getProjects } from "@/server/controllers/project.controller";

export default async function AdminProjects() {
  const projects = await getProjects("all");

  return (
    <ListDataWrapper
      hasActions
      title="Projects"
      cols={[
        { label: "NAME", key: "name" },
        { label: "LIVE", key: "liveLink" },
        { label: "GITHUB", key: "githubLink" },
        { label: "STATUS", key: "status" },
      ]}
      createText="Add Projects"
      createUrl="/admin/projects/create"
      data={JSON.parse(JSON.stringify(projects.projects))}
      deleteAction={deleteProjectAction}
      editUrl="/admin/projects/edit"
    />
  );
}
