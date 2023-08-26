import Link from 'next/link'
import Image from 'next/image'
import { Code, Globe, Hexagon, TrendingUp } from 'react-feather'

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
      <div className="max-w-[85%] mx-auto">

        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServiceSection>
          <div className="flex flex-col items-center justify-center gap-5 my-10 lg:flex-row">
            <ServiceCard icon={<TrendingUp className="w-12 h-12" />} title="Digital Marketing & SEO" />
            <ServiceCard icon={<Globe className="w-12 h-12" />} title="Web application development" bgColor="bg-light_green" />
            <ServiceCard icon={<Code className="w-12 h-12" />} title="Mobile app development" bgColor="bg-light_red" />
            <ServiceCard icon={<Hexagon className="w-12 h-12" />} title="UI/UX & Graphics Design" bgColor="bg-light_purple" />
          </div>
        </ServiceSection>
        
        {/* Projects Section */}
        <section className="py-10 mt-40">
          <div className="">
          </div>
        </section>

        {/* About Section */}
        <section className="py-5 mt-5">
          <h2>About US</h2>
          <div className="flex flex-col items-center justify-center gap-4 py-8 lg:flex-row">
            <Image src="/website_development_hero.jpg" alt="a laptop displaying a hand pointing in text which reads web development" className="w-auto h-auto rounded-lg" width={300} height={600} />
            <p className="mt-5 text-lg text-justify">
              We are a team of dedicated professionals with a passion for cutting-edge technology. We specialize in providing customized solutions that cater to your unique business needs. Our expertise ranges from web development and mobile app design to digital marketing. Trust us to transform your ideas into reality and propel your business forward in the digital age.
            </p>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="py-16 mt-20">
        <div className="max-w-[85%] mx-auto ">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
            <div>
              <span className="flex items-center gap-2 mb-8">
                <Image src="/thanka_digital_logo.svg" alt="Thanka Digital logo" className="w-14 h-14" width={50} height={50} />
                <h2>Thanka Digital</h2>
              </span>
              <Social />
            </div>
            <div className="flex flex-wrap gap-10">
              {
                footerLinks.map((footerLink, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <h5>{footerLink.title}</h5>
                    {
                      footerLink.links.map((link, index) => (
                        <p>
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
];
