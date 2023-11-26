import { teams } from '@/utils/team'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GitHub, Linkedin } from 'react-feather'

const AboutSection = async () => {
  return (
    <section className="py-5 mt-5">
      <h3>About US</h3>
      <p className="mt-5 text-lg text-justify">
        We are a team of dedicated professionals with a passion for cutting-edge technology. We specialize in providing customized solutions that cater to your unique business needs. Our expertise ranges from web development and mobile app design to digital marketing. Trust us to transform your ideas into reality and propel your business forward in the digital age.
      </p>
      <div className="about-images">
        {
          teams.coreTeams.map((member, index) => (
            <figure className={`about-single-image single-image-${index} group`} key={index}>
              <Image src={member.image} alt={member.name} className="object-cover w-full h-full" width={300} height={600} />
              <figcaption className="absolute bottom-0 left-0 w-full h-full transition-all ease-in-out md:h-1/3 bg-gradient-to-t from-black to-transparent group-hover:h-full"></figcaption>
              <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-full text-white transition-all ease-in-out delay-100 opacity-100 lg:-bottom-full md:opacity-0 group-hover:opacity-100 lg:group-hover:bottom-0">
                <h5 className="text-xl font-semibold">{member.name}</h5>
                <div className="flex gap-6 mt-4">
                  <Link href={member.linkedin} target='_blank' rel="noreferrer" aria-label={`link to linkedin of ${member.name}`}><Linkedin /></Link>
                  <Link href={member.github} target='_blank' rel="noreferrer" aria-label={`link to github of ${member.name}`}><GitHub /></Link>
                </div>
              </div>
            </figure>
          ))
        }
      </div>
    </section>
  )
}

export default AboutSection