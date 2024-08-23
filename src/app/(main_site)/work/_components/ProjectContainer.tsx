"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "react-feather";

interface IProjectContainerProps {
  project: ProjectModel & { colSpan: number };
}

export default function ProjectContainer({ project }: IProjectContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      className={`relative group ${
        project.colSpan === 3
          ? "col-span-3"
          : project.colSpan === 2
          ? "col-span-3 lg:col-span-2"
          : "col-span-3 lg:col-span-1"
      }`}
      transition={{
        duration: project.colSpan === 3 ? 0 : 0.5,
        delay: project.colSpan === 3 ? 0 : 0.5,
      }}
      viewport={{ once: true }}
    >
      <img
        src={project.thumbnail}
        alt={`${project.name} design system screenshot`}
        className="object-contain w-full h-full border rounded-md"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center gap-4 text-white transition-opacity duration-150 rounded-md opacity-0 group-hover:opacity-100 bg-black/80">
        <p>{project.name}</p>
        <Link
          href={`/work/${project.slug}`}
          className="px-4 py-2 text-white rounded-md bg-primary_blue w-fit"
        >
          View the journey
        </Link>
        {project.liveLink ? (
          <a
            href={project.liveLink}
            target="_blank"
            className="flex items-center text-base underline"
          >
            View project <ArrowUpRight />
          </a>
        ) : (
          <p className="text-base font-medium text-sky-200">Ongoing project</p>
        )}
      </div>
    </motion.div>
  );
}
