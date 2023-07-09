import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center my-14 min-h-[32em] relative hero-section">
      <Image 
        src="/thanka_digital_logo.svg" 
        alt="thanka digital logo" 
        width={250}
        height={650} 
        className="w-[5em] h-[5em] mt-6"
      />
      <h1 className="z-20 bg-clip-text text-transparent bg-gradient-to-r to-primary_blue from-primary_red">Let's Take Your <br />Business To Next Level</h1>
      <p className="mt-2">We provide you services to help you build your dream system come true with ease</p>
      <Image 
        src="/website_development_hero.jpg" 
        alt="laptop saying website development free image from freepik" 
        width={250}
        height={650} 
        className="rounded-tr-[40%] rounded-bl-[40%] w-[18em] h-[25em] object-cover absolute top-0 left-0"
      />
      <Image 
        src="/website_development_hero.jpg" 
        alt="laptop saying website development free image from freepik" 
        width={250}
        height={650} 
        className="rounded-tr-[40%] rounded-bl-[40%] w-[18em] h-[25em] object-cover absolute bottom-0 right-0"
      />
    </section>
  )
}

export default HeroSection