import Link from 'next/link'
import Image from 'next/image'
import { Code, GitHub, Globe, Hexagon, Linkedin, TrendingUp } from 'react-feather'

import Social from '../components/Social'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/services/ServiceCard'
import ServiceSection from '../components/services/ServiceSection'
import React from 'react'

export default function Home() {
  return (
    <main>
      {/* Header */}
      <Header />
      <div className="max-w-[90%] mx-auto">

        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServiceSection>
          <div className="flex flex-col items-center justify-center gap-5 my-10 lg:flex-row">
            <ServiceCard icon={<Globe className="w-12 h-12 text-primary_red" />} title="Web application development" />
            <ServiceCard icon={<Code className="w-12 h-12" />} title="Mobile app development" bgColor="bg-red-50" />
            <ServiceCard icon={<Hexagon className="w-12 h-12" />} title="UI/UX & Graphics Design" bgColor="bg-purple-50" />
            <ServiceCard icon={<TrendingUp className="w-12 h-12" />} title="Digital Marketing & SEO" bgColor="bg-blue-50" />
          </div>
        </ServiceSection>
        
        {/* Projects Section */}
        <section className="py-10 mt-40">
          <div className="">
          </div>
        </section>

        {/* About Section */}
        <section className="py-5 mt-5">
          <h3>About US</h3>
          <p className="mt-5 text-lg text-justify">
            We are a team of dedicated professionals with a passion for cutting-edge technology. We specialize in providing customized solutions that cater to your unique business needs. Our expertise ranges from web development and mobile app design to digital marketing. Trust us to transform your ideas into reality and propel your business forward in the digital age.
          </p>
          <div className="flex flex-col items-center justify-between py-8 lg:flex-row">
            {
              team.map((member, index) => (
                <figure className="relative md:w-[20%] w-[90%] h-[500px] group cursor-pointer" key={index}>
                  <Image src={member.imageUrl} alt={member.name} className="object-cover w-full h-full" width={300} height={600} />
                  <figcaption className="absolute bottom-0 left-0 w-full h-full transition-all md:h-1/3 bg-gradient-to-t from-black to-transparent group-hover:h-full"></figcaption>
                  <div className="absolute bottom-0 left-0 flex flex-col items-center justify-center w-full h-full text-white transition-all opacity-100 md:opacity-0 group-hover:opacity-100">
                    <h5 className="text-xl font-semibold">{member.name}</h5>
                    <div className="flex gap-6 mt-4">
                      <Link href={member.linkedinUrl} target='_blank'><Linkedin /></Link>
                      <Link href={member.githubUrl} target='_blank'><GitHub /></Link>
                    </div>
                  </div>
                </figure>
              ))
            }
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="py-16 mt-20">
        <div className="max-w-[90%] mx-auto ">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
            <div>
              <span className="flex items-center gap-2 mb-8">
                <Image src="/thanka_digital_logo.svg" alt="Thanka Digital logo" className="w-14 h-14" width={50} height={50} />
                <h5>Thanka Digital</h5>
              </span>
              <Social />
            </div>
            <div className="flex flex-wrap gap-10">
              {
                footerLinks.map((footerLink, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <h6>{footerLink.title}</h6>
                    {
                      footerLink.links.map((link, index) => (
                        <p key={index}>
                          {
                            link.href ? (
                              <Link href={link.href} key={index}>{link.text}</Link>
                            ) : (
                              <React.Fragment key={index}>{link.text}</React.Fragment>
                            )
                          }
                        </p>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
          <hr className="my-8" />
          <p className="font-semibold text-center">&copy; {new Date().getFullYear()} Thanka Digital. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}


const footerLinks = [
  {
    title: 'ADDRESS',
    links: [
      {
        text: 'Fulbari - 11, Pokhara',
        href: null,
      },
      {
        text: 'Nepal 33700',
        href: null,
      },
    ],
  },
  {
    title: 'CONTACT US',
    links: [
      {
        text: '+977 9825140802',
        href: 'tel:9825140802',
      },
      {
        text: '+977 9866011579',
        href: 'tel:9866011579',
      },
      {
        text: 'thankadigital@gmail.com',
        href: 'mailto:thankadigital@gmail.com',
      },
    ],
  },
  {
    title: 'SERVICES',
    links: [
      {
        text: 'Web Development',
        href: null,
      },
      {
        text: 'App Development',
        href: null,
      },
      {
        text: 'Digital Marketing',
        href: null,
      },
      {
        text: 'SEO',
        href: null,
      },
    ],
  },
  {
    title: 'IMPORTANT LINKS',
    links: [
      {
        text: 'Blogs',
        href: '/',
      },
      {
        text: 'Career',
        href: '/',
      },
    ],
  }
];

const team = [
  {
    name: "Alson Garbuja",
    imageUrl: "/team/alson.jpg",
    linkedinUrl: "https://linkedin.com/in/alsongarbuja",
    githubUrl: "https://github.com/alsongarbuja",
  },
  {
    name: "Sunil Paudel",
    imageUrl: "/team/sunil.jpg",
    linkedinUrl: "https://linkedin.com/in/alsongarbuja",
    githubUrl: "https://github.com/alsongarbuja",
  },
  {
    name: "Susant Basnet",
    imageUrl: "/team/susant.jpg",
    linkedinUrl: "https://linkedin.com/in/alsongarbuja",
    githubUrl: "https://github.com/alsongarbuja",
  },
  {
    name: "Utsab gurung",
    imageUrl: "/team/utsab.jpg",
    linkedinUrl: "https://linkedin.com/in/alsongarbuja",
    githubUrl: "https://github.com/alsongarbuja",
  },
  {
    name: "Bipin Adhikari",
    imageUrl: "/team/bipin.jpg",
    linkedinUrl: "https://linkedin.com/in/alsongarbuja",
    githubUrl: "https://github.com/alsongarbuja",
  },
];