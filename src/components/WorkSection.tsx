import Link from "next/link";
import Image from "next/image";

import { projectsList } from "@/utils/projects";

const WorkSection = () => {
  return (
    <section className="py-5 mt-5">
        <h3>Works</h3>
        <p className="mb-4">
          Some of our selected projects. {projectsList.length > 6 && <Link href="/works" className="underline text-primary_blue">See More</Link>}
        </p>
      <div className="grid items-center justify-center grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {
          projectsList.map(project => (
            <Link href={project.detailLink} key={project.id}>
              <figure className="relative col-span-1 overflow-hidden rounded-md group" key={project.id}>
                <Image 
                  src={project.thumbnail} 
                  alt={project.name} 
                  width={400} 
                  height={350} 
                  priority={project.id==="1"}
                  className="w-full h-[300px] object-cover brightness-50"
                />
                <div className="text-white p-4 flex flex-col justify-between absolute group-hover:top-0 transition-all ease-in-out top-[60%] left-0 w-full h-full bg-gradient-to-t from-primary_blue to-transparent hover:to-black/30">
                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.description}</p>
                  </div>

                  <Image 
                    src={project.logo} 
                    alt={project.name} 
                    className="w-10 h-auto md:w-14" 
                    width={50} 
                    height={50}
                  />
                </div>
              </figure>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default WorkSection