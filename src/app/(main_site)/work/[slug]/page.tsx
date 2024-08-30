import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { cn } from "@/utils/classess";
import { projectsList } from "@/utils/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

export default function WorkJourneyPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectsList.find((project) => project.slug === params.slug);

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
          <div className="flex flex-col w-[90vw] md:w-[70vw] mx-auto">
            <h1 className="text-4xl text-white font-playfair">
              {project?.name}
            </h1>
            <p className="text-lg text-white">{project?.description}</p>
          </div>
        </div>
      </div>
      <CustomWidthWrapper className="py-12">
        <div className="flex flex-col w-full gap-4 bg-white min-h-[60vh] pb-12">
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
            <h2 className="font-playfair">Project Details</h2>
            <p className="text-justify">{project?.details.summary}</p>
            {project?.details.images && (
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project?.details.images.map((image, idx) => (
                  <Image
                    key={idx}
                    src={image}
                    alt={`in detail image for ${project?.name}`}
                    width={1920}
                    height={1080}
                    className={cn(
                      "object-cover border rounded-xl",
                      idx === 0 && "md:col-span-2"
                    )}
                  />
                ))}
              </div>
            )}
            {project?.details.inDepth.map((detail, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h3>{detail.title}</h3>
                {detail.image && (
                  <Image
                    src={detail.image}
                    alt={`in depth image for ${project?.name}`}
                    width={1920}
                    height={1080}
                    className="object-cover w-screen border rounded-md h-96"
                  />
                )}
                <p className="text-justify">{detail.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="#connect-section"
            className="inline-block py-4 mt-6 text-center bg-neutral_black text-neutral_white"
          >
            DISCUSS YOUR PROJECT WITH US 👇
          </Link>

          <Link
            href="/work"
            className="font-medium underline decoration-primary_red underline-offset-4 decoration-2 font-playfair"
          >
            Go Back to projects
          </Link>
        </div>
      </CustomWidthWrapper>
    </>
  );
}
