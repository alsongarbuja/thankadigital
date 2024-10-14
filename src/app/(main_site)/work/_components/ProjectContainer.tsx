"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import { IProjectScheme } from "@/server/models/project.model";

interface IProjectContainerProps {
  project: IProjectScheme;
  index: number;
}

export default function ProjectContainer({
  project,
  index,
}: IProjectContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      className={`relative group ${
        index % 5 === 0
          ? "col-span-3"
          : isTwoSpan(index)
          ? "col-span-3 lg:col-span-2"
          : "col-span-3 lg:col-span-1"
      }`}
      transition={{
        duration: index % 5 === 0 ? 0 : 0.5,
        delay: index % 5 === 0 ? 0 : 0.5,
      }}
      viewport={{ once: true }}
    >
      <Image
        src={project.thumbnail}
        alt={`${project.name} design system screenshot`}
        width={900}
        height={600}
        className="object-cover w-full h-full border-2 border-dotted rounded-2xl"
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
            View project <ArrowRight className="-rotate-45" />
          </a>
        ) : (
          <p className="text-base font-medium text-sky-200">Ongoing project</p>
        )}
      </div>
    </motion.div>
  );
}

function isTwoSpan(index: number) {
  const twoSpanNumbers = [1, 4, 6, 9, 11, 14, 16, 19, 21, 24];
  return twoSpanNumbers.includes(index);
}
