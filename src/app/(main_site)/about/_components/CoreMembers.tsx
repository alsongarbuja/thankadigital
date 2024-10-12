import { getTeams } from "@/server/controllers/team.controller";
import Image from "next/image";

const CoreMembers = async () => {
  const coreTeams = await getTeams("Core");

  return (
    <section className="my-14">
      <div className="mb-8">
        <p className="text-4xl font-bold text-center text-secondary">
          Meet the team
        </p>
        <p className="text-xl font-semibold text-center">
          Behind the process of your product
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-x-10 gap-y-24 justify-evenly">
        {(coreTeams.teams as TeamModel[]).map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4"
          >
            <Image
              src={member.imageUrl}
              alt={`photo of ${member.name}`}
              width={350}
              height={350}
              className="object-contain rounded-full w-80 h-80"
            />
            <p className="mt-2 text-xl font-bold text-center text-secondary">
              {member.name}
            </p>
            <p className="text-xl font-bold text-center">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreMembers;
