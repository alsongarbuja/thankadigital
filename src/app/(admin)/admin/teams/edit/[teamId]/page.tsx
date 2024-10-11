import { getTeamById } from "@/server/controllers/team.controller";
import TeamForm from "../../_components/TeamForm";

export default async function TeamEditPage({
  params,
}: {
  params: { teamId: string };
}) {
  const team = await getTeamById(params.teamId);

  return <TeamForm data={team} isEdit />;
}
