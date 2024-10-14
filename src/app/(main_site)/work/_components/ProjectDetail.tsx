"use client";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";
import { ArrowRight } from "iconsax-react";

import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { IProjectScheme } from "@/server/models/project.model";

interface IProjectDetailProps {
  project: IProjectScheme;
}

export default function ProjectDetail({ project }: IProjectDetailProps) {
  return (
    <CustomWidthWrapper className="py-12">
      <div className="flex flex-col w-full gap-4 bg-white min-h-[60vh] pb-12">
        <div className="flex items-center justify-end gap-4">
          {project?.liveLink ? (
            <a
              href={project?.liveLink ?? "#"}
              target="_blank"
              className="flex items-center gap-2 underline text-primary_blue decoration-primary_red"
            >
              View project <ArrowRight className="-rotate-45" />
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
          <div>{ReactHtmlParser(project?.details || "")}</div>
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
  );
}
