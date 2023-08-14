import Social from "./Social"
import Image from "next/image"

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full py-10">
      <span className="flex items-center gap-2">
        <Image src="/thanka_digital_logo.svg" alt="Thanka Digital logo" className="w-14 h-14" width={50} height={50} />
        <h2>Thanka Digital</h2>
      </span>
      <Social />
      <button className="px-6 py-2 text-white rounded-full bg-primary_red">Contact US</button>
    </header>
  )
}

export default Header