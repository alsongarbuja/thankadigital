"use client";
import { projectsList } from "@/utils/projects";
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "react-feather";

const PortfolioPage = () => {
  const [active, setActive] = useState({
    index: 0,
    direction: "left",
  });

  const handleNext = () => setActive(prev => ({index: (prev.index+1)%projectsList.length, direction: "right"}));
  const handlePrev = () => setActive(prev => ({index: (prev.index-1)%projectsList.length, direction: "left"}));

  return (
    <>
      <h3 className="uppercase">Our Works</h3>
      <p className="font-semibold text-gray-400">See the journey of works we have done for our clients</p>

      <div className="relative w-full mt-8 overflow-hidden">
        {
          projectsList.map((project, index) => (
            <div 
              data-index={index} 
              key={project.id} 
              // className={`absolute top-0 transition-all duration-500 ease-in-out ${active.index===index?"left-0":"-right-full"} ${(active.direction==="right"&&active.index===index-1)&&"-left-full"} ${(active.direction==="left"&&active.index===index+1)&&"-right-full"} grid w-full h-full grid-cols-2 bg-white`}
              className={`flex gap-2 my-12 even:flex-row-reverse`}
            >
              <img src={project.thumbnail} alt={`${project.name} design system screenshot`} className="object-cover w-1/2 h-full border rounded-md" />
              <div className="flex flex-col justify-center flex-1 p-5 bg-white odd:items-end">
                <h2 className="font-semibold">{project.name}</h2>
                <p className="text-gray-400">{project.description}</p>
                <p className="flex items-center gap-2 my-4 font-semibold">
                  Project Scope: {project.journey.scopes.map((scope: string, i: number) => (
                    <span key={i} className="px-4 py-1 text-white rounded-full bg-primary_blue">{scope}</span>
                  ))}
                </p>
                <p className="flex items-center gap-2 my-4 font-semibold">
                  Project Status: <span className="text-green-600">{project.journey.status}</span>
                </p>
                <button className="px-4 py-2 mt-4 text-white bg-black rounded-md w-fit">View the journey</button>
              </div>
            </div>
          ))
        }
        {
          projectsList.length > 1 && (
            <>
              {active.index > 0 && (
                <button onClick={handlePrev} className="absolute z-10 p-4 text-white -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/70 top-1/2">
                  <ChevronLeft />
                </button>
              )}
              {active.index < projectsList.length-1 && (
                <button onClick={handleNext} className="absolute right-0 z-10 p-4 text-white -translate-y-1/2 rounded-full bg-black/40 hover:bg-black/70 top-1/2">
                  <ChevronRight />
                </button>
              )}
            </>
          )
        }
      </div>
    </>
  )
}

export default PortfolioPage