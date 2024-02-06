import Link from "next/link"
import Image from "next/image"
import NavigationHeader from "./main_website_navigation/NavigationHeader"

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full py-10 max-w-[90%] mx-auto">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/thanka_digital_logo.svg" alt="Thanka Digital logo" className="w-10 h-10 md:w-14 md:h-14" width={60} height={60} />
      </Link>
      <NavigationHeader />
    </header>
  )
}

export default Header