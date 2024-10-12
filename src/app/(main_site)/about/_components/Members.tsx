import { getTeams } from "@/server/controllers/team.controller";
import Image from "next/image";

const Members = async () => {
  const members = await getTeams("Members");

  return (
    <main className="w-full my-14">
      <div className="mt-24 mb-8 ">
        <p className="text-4xl font-bold text-center text-secondary">
          Who are helping us
        </p>
        <p className="text-xl font-semibold text-center">
          People who help us build great products
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full gap-12">
        {(members.teams as TeamModel[]).map((hMember, i) => (
          <div className="relative w-72 h-80" key={i}>
            <Image
              src={hMember.imageUrl}
              alt={hMember.name}
              width={400}
              height={300}
              className="object-cover h-full rounded-lg"
            />
            <div className="absolute top-0 bottom-0 h-full rounded-lg w-72 bg-black/20"></div>

            <div className="absolute bottom-4 left-8">
              <p className="text-lg font-semibold text-white ">
                {hMember.name}
              </p>
              <p className="text-sm font-light text-white ">
                {hMember.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Members;
