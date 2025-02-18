"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import AutoPlay from "embla-carousel-autoplay";
import { Carousel, CarouselSlide } from "@mantine/carousel";

// import { projectsList } from "@/utils/projects";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

import "@mantine/carousel/styles.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-react";
import { IProjectScheme } from "@/server/models/project.model";

const WorkSection = ({ projects }: { projects: IProjectScheme[] }) => {
  const autoplay = useRef(AutoPlay({ delay: 2000 }));

  return (
    <section className="py-9">
      <CustomWidthWrapper>
        <h3 className="text-primary_blue">Projects</h3>
        <p className="font-semibold">Some of our selected projects showcase</p>
      </CustomWidthWrapper>

      <div className="mt-12">
        <Carousel
          slideSize={{
            lg: "60%",
            md: "60%",
            base: "100%",
          }}
          plugins={[autoplay.current]}
          onMouseEnter={autoplay.current.stop}
          onMouseLeave={autoplay.current.reset}
          onMouseOut={autoplay.current.reset}
          slideGap="md"
          align="center"
          loop
          containScroll="trimSnaps"
          nextControlIcon={
            <ArrowRight2
              size={42}
              className="text-black"
              aria-label="chevron button to slide previous project"
            />
          }
          previousControlIcon={
            <ArrowLeft2
              size={42}
              className="text-black "
              aria-label="chevron button to slide next project"
            />
          }
        >
          {projects.map((project, i) => (
            <CarouselSlide key={i}>
              <section className="-skew-x-[10deg] min-h-[80vh] max-h-[80vh] border relative">
                <Image
                  alt={`${project.name} cover image`}
                  src={project.thumbnail}
                  height={600}
                  width={700}
                  className="w-full h-[80vh] object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full select-none bg-black/40">
                  <div className="flex flex-col items-center justify-center h-full gap-6">
                    <p className="text-2xl font-semibold text-white">
                      {project.name}
                    </p>
                    <p className="w-1/2 text-lg font-semibold text-center text-white">
                      {project.summary}
                    </p>
                    <div className="flex gap-6">
                      {/* <Link href={"#"}>View details</Link> */}
                      {project.liveLink && (
                        <Link
                          href={project.liveLink}
                          className="p-2 font-bold text-white rounded-md bg-primary_red"
                        >
                          View live
                        </Link>
                      )}
                      {/* <a
                        href={project.liveLink}
                        className="flex items-center gap-2"
                      >
                        <Globe />
                        <p>Live</p>
                      </a> */}
                      {/* <a
                        href={project.detailLink}
                        className="flex items-center gap-2"
                      >
                        <Code />
                        <p>Details</p>
                      </a> */}
                    </div>
                  </div>
                </div>
              </section>
            </CarouselSlide>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default WorkSection;
