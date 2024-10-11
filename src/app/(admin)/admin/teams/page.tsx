import { getTeams } from "@/server/controllers/team.controller";
import { ListDataWrapper } from "../_components/ListDataWrapper";
import { deleteTeamAction } from "@/server/actions/team.action";

export default async function TeamPage() {
  const teams = await getTeams("all");

  return (
    <ListDataWrapper
      hasActions
      title="Memebers"
      cols={["NAME", "POSITION", "TEAM"]}
      createText="Add Team"
      createUrl="/admin/teams/create"
      data={JSON.parse(JSON.stringify(teams.teams))}
      deleteAction={deleteTeamAction}
      editUrl="/admin/teams/edit/"
    />
  );
}
