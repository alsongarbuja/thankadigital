import { getTeams } from "@/server/controllers/team.controller";
import { ListDataWrapper } from "../_components/ListDataWrapper";

export default async function TeamPage() {
  const teams = await getTeams("all");

  return (
    <ListDataWrapper
      hasActions
      title="Teams"
      cols={["NAME", "POSITION", "TEAM"]}
      createText="Add Team"
      createUrl="/admin/teams/create"
      data={JSON.parse(JSON.stringify(teams.teams))}
      deleteUrl="/api/admin/teams/"
      editUrl="/admin/teams/edit/"
    />
  );
}
