import Link from "next/link";
import CustomTable from "../../_components/CustomTable";
import { getTeams } from "@/server/controllers/team.controller";
import ActionTd from "../../_components/ActionTd";
import Image from "next/image";

export default async function TeamPage() {
  const teams = await getTeams("all");

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h3>Teams</h3>
        <Link
          href="/admin/teams/create"
          className="px-4 py-2 text-white rounded-md bg-primary_red"
        >
          Add Team
        </Link>
      </div>
      <CustomTable cols={["", "NAME", "POSITION", "Team"]}>
        {teams.map((team, index) => (
          <tr key={index} className="border-b-2 border-gray-700">
            <td className="h-12 text-left">
              <Image
                src={team.imageUrl}
                alt={`photo of ${team.name}`}
                width={50}
                height={50}
              />
            </td>
            <td className="h-12 text-left">{team.name}</td>
            <td className="h-12 text-left">{team.position}</td>
            <td className="h-12 text-left">{team.team}</td>
            <ActionTd
              editUrl={`/admin/teams/edit/${team.id}`}
              deleteUrl={`/api/admin/teams/${team.id}`}
            />
          </tr>
        ))}
      </CustomTable>
    </>
  );
}
