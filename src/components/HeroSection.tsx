import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center my-14 min-h-[32em] relative hero-section">
      <Image 
        src="/thanka_digital_logo.svg" 
        alt="thanka digital logo" 
        width={250}
        height={650} 
        className="w-[5em] h-[5em] mt-6"
      />
      <h1 className="z-20 text-transparent bg-clip-text bg-gradient-to-t from-primary_blue to-primary_red">Let's Take Your <br />Business To Next Level</h1>
      <p className="mt-2">We provide you services to help you build your dream system come true with ease</p>
    </section>
  )
}

export default HeroSection