import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-between">
      <div>
        <h1 className="text-primary_red">Thanka <span className="text-primary_blue">Digital</span></h1>
        <p className="font-semibold text-primary_red">CODE CRAFTED FOR QUALITY</p>
        <p className="w-full mb-4 md:w-3/4">Leverage our expertise to elevate your business. Our meticulously crafted code and state-of-the-art technologies, backed by our dedicated teams, ensure the delivery of top-tier quality solutions.</p>
        <button className="p-4 mr-4 text-white rounded-md bg-primary_red">Connect with us</button>
        <Link href="#" className="font-medium text-primary_blue">View our portfolio</Link>
      </div>
      <Image 
        src="/hero_section_img.svg" 
        alt="illustration of young man waving while sitting at the computer" 
        width={250}
        height={350} 
        priority
        className="w-[45rem] hidden md:block"
      />
    </section>
  )
}

export default HeroSection