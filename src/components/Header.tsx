import Social from "./Social"
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full py-10 max-w-[90%] mx-auto">
      <span className="flex items-center gap-2">
        <Image src="/thanka_digital_logo.svg" alt="Thanka Digital logo" className="w-10 h-10 md:w-14 md:h-14" width={50} height={50} />
        <span className="text-base font-bold md:text-xl">Thanka <br /> Digital</span>
      </span>
      <nav className="hidden md:block">
        <Social />
      </nav>
      <button className="px-6 py-2 text-white rounded-full bg-primary_red">Contact US</button>
    </header>
  )
}

export default Header