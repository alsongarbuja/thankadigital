import HeroSection from "./_components/hero_section/HeroSection";
import ServiceSection from "./_components/service_section/ServiceSection";
import WorkSection from "./_components/WorkSection";
import TechnologySection from "./_components/TechnologySection";
import { getProjects } from "@/server/controllers/project.controller";
import { IProjectScheme } from "@/server/models/project.model";

export default async function Home() {
  const projects = await getProjects();

  return (
    <>
      <HeroSection />
      <ServiceSection />
      <WorkSection
        projects={projects.projects as unknown as IProjectScheme[]}
      />
      <TechnologySection />
    </>
  );
}
