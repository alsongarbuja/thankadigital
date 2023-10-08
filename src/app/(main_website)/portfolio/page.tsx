"use client";
import { projectsList } from "@/utils/projects";
import { useState, useEffect } from "react";

const PortfolioPage = () => {
  return (
    <div className="bg-white">
      <h3 className="uppercase cursor-none">Our Works</h3>
      <p className="font-semibold text-gray-400 cursor-none">See the journey of works we have done for our clients</p>

      <div className="relative w-full mt-8 overflow-hidden cursor-none">
        {
          projectsList.map((project, index) => (
            <div 
              data-index={index} 
              key={project.id} 
              className={`flex gap-2 my-12 flex-col items-center md:flex-row md:even:flex-row-reverse`}
            >
              <img src={project.thumbnail} alt={`${project.name} design system screenshot`} className="object-cover w-full h-full border rounded-md md:w-1/2" />
              <div className="flex flex-col justify-center flex-1 p-5 odd:items-end">
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
                <button className="px-4 py-2 mt-4 text-white bg-black rounded-md w-fit cursor-none">View the journey</button>
              </div>
            </div>
          ))
        }
        <CustomCursor />
      </div>
    </div>
  )
}

const CustomCursor = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => setPosition({x: e.clientX, y: e.clientY});
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div className="fixed z-50 hidden w-12 h-12 bg-white rounded-full pointer-events-none mix-blend-difference md:block" style={{
      left: position.x-6,
      top: position.y-6,
      transform: "translate(-50%, -50%)",
    }} />
  )
}

export default PortfolioPage