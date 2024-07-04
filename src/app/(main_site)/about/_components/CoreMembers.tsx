"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CoreMembers = () => {
  const [members, setMembers] = useState([]);
  const [fetching, setFetching] = useState(true);

  const fetchMembers = async () => {
    const res = await fetch("/api/admin/teams?type=Core");
    const data = await res.json();
    setMembers(data.teams);
  };

  useEffect(() => {
    fetchMembers().finally(() => setFetching(false));
  }, []);

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
        {fetching &&
          Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <div className="bg-gray-300 rounded-full w-80 h-80 animate-pulse"></div>
              <div className="h-6 bg-gray-300 w-52 animate-pulse"></div>
              <div className="h-6 bg-gray-300 w-52 animate-pulse"></div>
            </div>
          ))}
        {!fetching &&
          members.map((member: TeamModel) => (
            <div
              key={member._id}
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
