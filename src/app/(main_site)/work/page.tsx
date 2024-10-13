import { Metadata } from "next";

import { projectsList } from "@/utils/projects";
import ProjectContainer from "./_components/ProjectContainer";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "See projects we have done. We have worked with clients from various industries.",
};

export default function WorkPage() {
  return (
    <CustomWidthWrapper className="py-12">
      <div className="bg-white min-h-[60vh]">
        <h3 className="uppercase">Our Works</h3>
        <p className="font-semibold text-gray-400">
          See the journey of works we have done for our clients
        </p>

        <div className="grid w-full grid-cols-3 gap-4 mt-12">
          {projectsList.map((project) => (
            <ProjectContainer project={project} key={project.slug} />
          ))}
        </div>
      </div>
    </CustomWidthWrapper>
  );
}
