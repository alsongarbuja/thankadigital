import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { projectsList } from "@/utils/projects";
import Image from "next/image";
import { ArrowUpRight } from "react-feather";

export default function WorkJourneyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsList.find((project) => project.slug === params.slug);

  return (
    <CustomWidthWrapper className="py-12">
      <div className="bg-white min-h-[60vh] pb-36">
        <h3 className="uppercase">{project?.name}</h3>
        <p className="font-semibold text-gray-400">{project?.description}</p>

        <div className="flex flex-col w-full gap-4 mt-12">
          <Image
            src={project?.thumbnail || "/images/hero.png"}
            alt={`cover image for ${project?.name}`}
            width={1920}
            height={1080}
            className="object-cover w-screen border rounded-md h-96"
          />

          <div className="flex items-center justify-end gap-4">
            {project?.journey.status === "live" ? (
              <a
                href={project?.liveLink ?? "#"}
                target="_blank"
                className="flex items-center gap-2 underline text-primary_blue decoration-primary_red"
              >
                View project <ArrowUpRight />
              </a>
            ) : (
              <p className="flex items-center gap-2 px-4 py-2 text-base text-white rounded-full bg-primary_blue">
                <span className="w-3 h-3 rounded-full bg-primary_red"></span>{" "}
                Ongoing project
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p>{project?.details.summary}</p>
            {project?.details.image && (
              <Image
                src={project?.details.image}
                alt={`in detail image for ${project?.name}`}
                width={1920}
                height={1080}
                className="object-cover w-screen border rounded-md h-96"
              />
            )}
            {project?.details.inDepth.map((detail, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h4>{detail.title}</h4>
                {detail.image && (
                  <Image
                    src={detail.image}
                    alt={`in depth image for ${project?.name}`}
                    width={1920}
                    height={1080}
                    className="object-cover w-screen border rounded-md h-96"
                  />
                )}
                <p>{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomWidthWrapper>
  );
}
