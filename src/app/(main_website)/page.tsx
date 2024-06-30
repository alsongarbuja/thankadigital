import { Code, Globe, Hexagon, TrendingUp } from "react-feather";

import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceSection from "@/components/services/ServiceSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import TechnologySection from "@/components/landing/TechnologySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <WorkSection />
      <TechnologySection />
    </>
  );
}
