"use client";
import Link from "next/link";
import { Menu, X } from "react-feather";
import { usePathname } from "next/navigation";

import { navLinks } from "@/utils/navLinks";
import { useWindowResize } from "@/hooks/useWindowResize";

const NavigationHeader = () => {
  const { isNavbarOpen, setIsNavbarOpen } = useWindowResize({ size: 768 });
  const pathname = usePathname();

  return (
    <>
      <Menu
        className="cursor-pointer md:hidden"
        onClick={() => setIsNavbarOpen((prev) => !prev)}
      />
      <nav
        className={`fixed transition-[top] duration-300 text-white md:text-black md:relative md:flex-row md:h-auto md:w-fit md:bg-inherit flex-col bg-primary_blue z-10 w-full h-screen ${
          isNavbarOpen ? "top-0" : "-top-[150%]"
        } left-0 font-semibold flex gap-8 items-center justify-center`}
        onClick={() => setIsNavbarOpen(false)}
      >
        {navLinks.map((navLink) => (
          <Link
            key={navLink.id}
            href={navLink.path}
            className={`px-4 py-1 rounded-md uppercase ${
              pathname === navLink.path && "text-white bg-primary_red"
            }`}
          >
            {navLink.name}
          </Link>
        ))}

        <X
          className={`fixed text-white cursor-pointer ${
            isNavbarOpen ? "top-5" : "-top-full"
          } right-5 md:hidden`}
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        />
      </nav>
    </>
  );
};

export default NavigationHeader;
