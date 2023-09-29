import Link from 'next/link'
import Image from 'next/image'
import { Code, GitHub, Globe, Hexagon, Linkedin, TrendingUp } from 'react-feather'

import { team } from '../utils/team'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/services/ServiceCard'
import ServiceSection from '../components/services/ServiceSection'
import WorkSection from '../components/WorkSection'

export default function Home() {
  return (
    <main className="max-w-[90%] mx-auto">

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

      <section className="py-5 mt-5">
        <h3>About US</h3>
        <p className="mt-5 text-lg text-justify">
          We are a team of dedicated professionals with a passion for cutting-edge technology. We specialize in providing customized solutions that cater to your unique business needs. Our expertise ranges from web development and mobile app design to digital marketing. Trust us to transform your ideas into reality and propel your business forward in the digital age.
        </p>
        <div className="flex flex-col items-center justify-between py-8 lg:flex-row">
          {
            team.map((member, index) => (
              <figure className="relative lg:w-[20%] w-[90%] h-[500px] group cursor-pointer" key={index}>
                <Image src={member.imageUrl} alt={member.name} className="object-cover w-full h-full" width={300} height={600} />
                <figcaption className="absolute bottom-0 left-0 w-full h-full transition-all md:h-1/3 bg-gradient-to-t from-black to-transparent group-hover:h-full"></figcaption>
                <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-full text-white transition-all opacity-100 md:opacity-0 group-hover:opacity-100">
                  <h5 className="text-xl font-semibold">{member.name}</h5>
                  <div className="flex gap-6 mt-4">
                    <Link href={member.linkedinUrl} target='_blank' rel="noreferrer" aria-label={`link to linkedin of ${member.name}`} as={member.linkedinUrl}><Linkedin /></Link>
                    <Link href={member.githubUrl} target='_blank' rel="noreferrer" aria-label={`link to github of ${member.name}`} as={member.githubUrl}><GitHub /></Link>
                  </div>
                </div>
              </figure>
            ))
          }
        </div>
      </section>

    </main>
  )
}