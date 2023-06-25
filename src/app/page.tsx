import ServiceCard from '../components/services/ServiceCard'
import Header from '../components/Header'
import Image from 'next/image'
import { ChevronsRight, Monitor, Smartphone, TrendingUp } from 'react-feather'
import Social from '../components/Social'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[85%] mx-auto">
        {/* Header */}
        <Header />

        {/* Hero Section */}
        <section className="text-center mt-14">
          <h1>Let's Take <br /> Your Business To Next Level</h1>
          <p className="mt-2">We provide you services to help you build your dream system come true with ease</p>
        </section>
      </div>

      {/* Services Section */}
      <section className="mt-40 pt-72 pb-20 relative bg-primary_blue">
        <div className="absolute -top-24 bg-primary_red w-1/2 h-80 left-[52%] -translate-x-[52%]"></div>
        <Image priority src="/TD_logo.svg" alt="td logo svg" className="w-1/2 h-80 bg-blue-700 absolute -top-28 left-1/2 -translate-x-1/2 shadow-sm" width={400} height={200} />
        <div className="max-w-[85%] mx-auto text-white">
          <h2 className="text-center">Our Services</h2>
          <div className="flex justify-between items-center w-full mt-12">
            <ServiceCard icon={<Monitor className="w-24 h-24" />} title="Web Apps" description="We build scalable and robust web applications using latest web technologies" />
            <hr className="rotate-90 bg-white w-36" />
            <ServiceCard icon={<TrendingUp className="w-24 h-24" />} title="Digital Marketing" description="We will handle your digital presence across multiple platform to grow you digitally" />
            <hr className="rotate-90 bg-white w-36" />
            <ServiceCard icon={<Smartphone className="w-24 h-24" />} title="Mobile Apps" description="We will create cross platform mobile applications" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mt-40 py-10">
        <div className="max-w-[85%] mx-auto border-b-2 border-black">
        </div>
      </section>

      {/* About Section */}
      <section className="mt-5 py-5">
        <div className="max-w-[85%] mx-auto flex gap-4">
          <div className="w-1/2">
            <h2>About US</h2>
            <p className="text-lg text-justify mt-5">
              We are a team of dedicated professionals with a passion for cutting-edge technology. We specialize in providing customized solutions that cater to your unique business needs. Our expertise ranges from web development and mobile app design to digital marketing. Trust us to transform your ideas into reality and propel your business forward in the digital age.
            </p>
          </div>
          <Image src="/TD_logo.svg" alt="thanka digital logo" className="rounded-lg w-1/2 h-80" width={300} height={600} />
        </div>
      </section>

      {/* Footer Section */}
      <section className="mt-20 pt-20 pb-10 bg-primary_blue">
        <div className="max-w-[85%] mx-auto text-white">
          <div className="flex justify-between items-start">
            <h2 className="text-right">Let's Work <br />Together</h2>
            <div className="w-1/2">
              <p className="text-justify">
                Are you ready to take your business to new heights? Look no further than our exceptional IT company. We prioritize customer satisfaction and strive to exceed your expectations at every step of the journey. Join forces with us to unlock your business's full potential and stay ahead of the competition in today's dynamic digital landscape.
              </p>
              <button className="bg-primary_red text-white px-5 py-4 mt-5 flex items-center gap-2 font-semibold">
                Let's Talk
                <ChevronsRight />
              </button>
            </div>
          </div>
          <div className="flex justify-between items-end mt-10">
            <div>
              <span className="flex items-center gap-2 mb-4">
                <Image src="/TD_logo.svg" alt="Thanka Digital logo" className="w-14 h-14" width={50} height={50} />
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
          <hr className="my-6" />
          <p className="text-sm">© 2021 Thanka Digital. All rights reserved.</p>
        </div>
      </section>
    </main>
  )
}
