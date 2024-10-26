import { Metadata } from "next";

import ProjectContainer from "./_components/ProjectContainer";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { getProjects } from "@/server/controllers/project.controller";
import { IProjectScheme } from "@/server/models/project.model";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "See projects we have done. We have worked with clients from various industries.",
};

export default async function WorkPage() {
  const projects = await getProjects();

  return (
    <CustomWidthWrapper className="py-12">
      <div className="bg-white min-h-[60vh]">
        <h1>Our Works</h1>
        <p className="text-gray-400">
          See the journey of works we have done for our clients
        </p>

        <div className="grid w-full grid-cols-3 gap-4 mt-12">
          {(projects.projects as unknown as IProjectScheme[]).map(
            (project, index) => (
              <ProjectContainer
                project={project}
                key={project.slug}
                index={index}
              />
            )
          )}
        </div>
      </div>
    </CustomWidthWrapper>
  );
}
