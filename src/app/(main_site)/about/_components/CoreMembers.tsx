import { getTeams } from "@/server/controllers/team.controller";
import Image from "next/image";

const CoreMembers = async () => {
  const coreTeams = await getTeams("Core");

  return (
    <section className="my-14">
      <div className="mb-8">
        <h2 className="text-center text-primary_blue">Meet the team</h2>
        <p className="text-center">Behind the process of your product</p>
      </div>

      <div className="flex flex-wrap items-center gap-x-10 gap-y-24 justify-evenly">
        {(coreTeams.teams as TeamModel[]).map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={member.imageUrl}
              alt={`photo of ${member.name}`}
              width={350}
              height={350}
              className="object-contain rounded-full w-80 h-80"
            />
            <p className="font-semibold text-center text-primary_blue">
              {member.name}
            </p>
            <p className="font-medium text-center">{member.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreMembers;
