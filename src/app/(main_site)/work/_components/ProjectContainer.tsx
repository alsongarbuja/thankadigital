"use client";
import { motion } from "framer-motion";

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
          ? "col-span-2"
          : "col-span-1"
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
        className="object-cover w-full h-full border rounded-md"
      />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-white transition-opacity duration-150 rounded-md opacity-0 group-hover:opacity-100 bg-black/50">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            className="font-semibold underline"
          >
            View project
          </a>
        )}
        <button className="px-4 py-2 mt-4 text-white bg-black rounded-md w-fit">
          View the journey
        </button>
      </div>
    </motion.div>
  );
}
