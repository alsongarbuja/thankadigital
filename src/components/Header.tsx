"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, X } from "react-feather"
import { usePathname } from "next/navigation"

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 768) {
        setIsNavbarOpen(false)
      }
    }

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    <header className="flex items-center justify-between w-full py-10 max-w-[90%] mx-auto">
      <span className="flex items-center gap-2">
        <Image src="/thanka_digital_logo.svg" alt="Thanka Digital logo" className="w-10 h-10 md:w-14 md:h-14" width={50} height={50} />
        {/* <span className="text-base font-bold md:text-xl">Thanka Digital</span> */}
      </span>
      <Menu className="cursor-pointer md:hidden" onClick={() => setIsNavbarOpen(prev => !prev)} />
      <nav 
        className={`fixed transition-[top] duration-300 text-white md:text-black md:relative md:flex-row md:h-auto md:w-fit md:bg-inherit flex-col bg-primary_blue z-10 w-full h-screen ${isNavbarOpen ? 'top-0' : '-top-[150%]'} left-0 font-semibold flex gap-8 items-center justify-center`}
        onClick={()=>setIsNavbarOpen(false)}
      >
        <Link href="/" className={`px-4 py-1 rounded-md ${pathname==="/" && "text-white bg-primary_red"}`}>HOME</Link>
        <Link href="/blogs" className={`px-4 py-1 rounded-md ${pathname==="/blogs" && "text-white bg-primary_red"}`}>BLOGS</Link>
        <Link href="#" className={`px-4 py-1 rounded-md ${pathname==="/portfolio" && "text-white bg-primary_red"}`}>WORKS</Link>
        <Link href="#" className={`px-4 py-1 rounded-md ${pathname==="/about" && "text-white bg-primary_red"}`}>ABOUT</Link>
        <Link href="/careers" className={`px-4 py-1 rounded-md ${pathname==="/careers" && "text-white bg-primary_red"}`}>CAREERS</Link>

        <X className={`fixed text-white cursor-pointer ${isNavbarOpen ? 'top-5' : '-top-full'} right-5 md:hidden`} onClick={() => setIsNavbarOpen(prev => !prev)} />
      </nav>
    </header>
  )
}

export default Header