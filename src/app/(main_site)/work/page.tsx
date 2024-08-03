import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { projectsList } from "@/utils/projects";
import ProjectContainer from "./_components/ProjectContainer";

export default function WorkPage() {
  return (
    <CustomWidthWrapper className="py-12">
      <div className="bg-white">
        <h3 className="uppercase">Our Works</h3>
        <p className="font-semibold text-gray-400">
          See the journey of works we have done for our clients
        </p>

        <div className="grid w-full grid-cols-3 gap-4 mt-12">
          {projectsList.map((project) => (
            <ProjectContainer project={project} key={project.id} />
            // <div
            //   data-index={index}
            //   key={project.id}
            //   className={`relative group ${
            //     project.colSpan === 3
            //       ? "col-span-3"
            //       : project.colSpan === 2
            //       ? "col-span-2"
            //       : "col-span-1"
            //   }`}
            // >
            //   <img
            //     src={project.thumbnail}
            //     alt={`${project.name} design system screenshot`}
            //     className="object-cover w-full h-full border rounded-md"
            //   />
            //   <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-white transition-opacity duration-150 rounded-md opacity-0 group-hover:opacity-100 bg-black/50">
            //     {project.liveLink && (
            //       <a
            //         href={project.liveLink}
            //         target="_blank"
            //         className="font-semibold underline"
            //       >
            //         View project
            //       </a>
            //     )}
            //     <button className="px-4 py-2 mt-4 text-white bg-black rounded-md w-fit">
            //       View the journey
            //     </button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </CustomWidthWrapper>
  );
}
