import Image from "next/image";

import ProjectDetail from "../_components/ProjectDetail";
import { IProjectScheme } from "@/server/models/project.model";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { getProjectBySlug } from "@/server/controllers/project.controller";

export default async function WorkJourneyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = (await getProjectBySlug(
    params.slug
  )) as unknown as IProjectScheme;

  return (
    <>
      <div className="relative">
        <Image
          src={project?.thumbnail || "/images/hero.png"}
          alt={`cover image for ${project?.name}`}
          width={1920}
          height={1080}
          className="object-cover object-center w-screen border h-[300px] md:h-[500px]"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-start justify-end py-12 bg-gradient-to-t from-black/80 to-transparent">
          <CustomWidthWrapper className="flex flex-col items-start w-full">
            <h1 className="text-4xl text-white font-playfair">
              {project?.name}
            </h1>
            <p className="text-lg text-white">{project?.summary}</p>
            {project?.tags.length > 0 && (
              <p className="font-medium text-footer_thanka">
                {project?.tags.map((tag) => `#${tag}`).join("  ")}
              </p>
            )}
          </CustomWidthWrapper>
        </div>
      </div>
      <ProjectDetail project={project} />
    </>
  );
}
