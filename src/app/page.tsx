import Link from 'next/link'
import Image from 'next/image'
import { Code, Globe, Hexagon, TrendingUp } from 'react-feather'

import Social from '../components/Social'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/services/ServiceCard'
import ServiceSection from '../components/services/ServiceSection'

export default function Home() {
  return (
    <main>
      <section className="max-w-[85%] mx-auto">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <HeroSection />

        {/* Services Section */}
        <ServiceSection>
          <div className="flex flex-col items-center justify-center gap-5 my-10 md:flex-row">
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
          <div className="flex gap-4">
            <div className="w-1/2">
              <h2>About US</h2>
              <p className="mt-5 text-lg text-justify">
                We are a team of dedicated professionals with a passion for cutting-edge technology. We specialize in providing customized solutions that cater to your unique business needs. Our expertise ranges from web development and mobile app design to digital marketing. Trust us to transform your ideas into reality and propel your business forward in the digital age.
              </p>
            </div>
            <Image src="/TD_logo.svg" alt="thanka digital logo" className="w-1/2 rounded-lg h-80" width={300} height={600} />
          </div>
        </section>
      </section>

      {/* Footer Section */}
      <section className="pt-16 pb-10 mt-20 bg-black">
        <div className="max-w-[85%] mx-auto text-white">
          {/* <div className="flex items-start justify-between">
            <h2 className="text-right">Let's Work <br />Together</h2>
            <div className="w-1/2">
              <p className="text-justify">
                Are you ready to take your business to new heights? Look no further than our exceptional IT company. We prioritize customer satisfaction and strive to exceed your expectations at every step of the journey. Join forces with us to unlock your business's full potential and stay ahead of the competition in today's dynamic digital landscape.
              </p>
              <button className="flex items-center gap-2 px-5 py-4 mt-5 font-semibold text-white bg-primary_red">
                Let's Talk
                <ChevronsRight />
              </button>
            </div>
          </div> */}
          <div className="flex items-start justify-between mt-10">
            <div>
              <span className="flex items-center gap-2 mb-4">
                <Image src="/thanka_digital_logo.svg" alt="Thanka Digital logo" className="w-14 h-14" width={50} height={50} />
                <h2>Thanka Digital</h2>
              </span>
              <Social />
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2">
                <h4 className="mb-3">ADDRESS</h4>
                <p>Fhulbari, Pokhara</p>
                <p>Nepal 33700</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="mb-3">CONTACT US</h4>
                <p><Link href="mailto:thankadigital@gmail.com">thankadigital@gmail.com</Link></p>
                <p><Link href="tel:9825140802">+977 9825140802</Link></p>
                <p><Link href="tel:9866011579">+977 9866011579</Link></p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="mb-3">SERVICES</h4>
                <p>Web Development</p>
                <p>App Development</p>
                <p>Digital Marketing</p>
                <p>SEO</p>
              </div>
            </div>
          </div>
          <hr className="my-8" />
          <p className="text-center">&copy; 2021 Thanka Digital. All rights reserved.</p>
        </div>
      </section>
    </main>
  )
}
