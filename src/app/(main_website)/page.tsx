import { Code, Globe, Hexagon, TrendingUp } from 'react-feather'

import HeroSection from '@/components/HeroSection'
import ServiceCard from '@/components/services/ServiceCard'
import ServiceSection from '@/components/services/ServiceSection'
import WorkSection from '@/components/WorkSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection>
        <div className="flex flex-col items-center justify-center gap-5 my-10 lg:flex-row">
          <ServiceCard icon={<Globe className="w-12 h-12 text-primary_red" />} title="Web application development" />
          <ServiceCard icon={<Code className="w-12 h-12" />} title="Mobile app development" bgColor="bg-red-50" />
          <ServiceCard icon={<Hexagon className="w-12 h-12" />} title="UI/UX & Graphics Design" bgColor="bg-purple-50" />
          <ServiceCard icon={<TrendingUp className="w-12 h-12" />} title="Digital Marketing & SEO" bgColor="bg-blue-50" />
        </div>
      </ServiceSection>
      <WorkSection />
      <AboutSection />
    </>
  )
}