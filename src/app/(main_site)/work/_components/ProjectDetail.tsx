"use client";
import Link from "next/link";
import ReactHtmlParser from "react-html-parser";

import { IProjectScheme } from "@/server/models/project.model";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

import "@/styles/project-detail.css";

interface IProjectDetailProps {
  project: IProjectScheme;
}

export default function ProjectDetail({ project }: IProjectDetailProps) {
  return (
    <CustomWidthWrapper>
      <>
        <div className="flex flex-col w-full gap-4 bg-white min-h-[60vh] pb-12">
          <div className="flex items-center justify-end gap-4"></div>

          <div className="project-detail">
            {ReactHtmlParser(project?.details || "")}
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
      </>
    </CustomWidthWrapper>
  );
}
