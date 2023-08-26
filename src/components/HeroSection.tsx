import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 text-center">
      <Image 
        src="/thanka_digital_logo.svg" 
        alt="thanka digital logo" 
        width={250}
        height={650} 
        className="w-[5em] h-[5em]"
      />
      <h1 className="z-20">Let's Take Your <br />Business To Next Level</h1>
      <h3 className="mt-2 text-primary_red">CODE CRAFTED FOR QUALITY</h3>
    </section>
  )
}

export default HeroSection