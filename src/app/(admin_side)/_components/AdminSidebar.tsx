"use client"

import Link from "next/link";
import { Briefcase, FileText, Grid, Users } from "react-feather";
import { usePathname, useRouter } from "next/navigation";
import { getFromLocalStorage, removeFromLocalStorage } from "@/helpers/localstorage";
import { signOut, useSession } from "next-auth/react";

const sidebarLinks = [
  {
    id: 0,
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <Grid />,
  },
  {
    id: 1,
    name: "Users",
    path: "/admin/users",
    icon: <Users />,
  },
  {
    id: 2,
    name: "Blogs",
    path: "/admin/blogs",
    icon: <FileText />,
  },
  {
    id: 3,
    name: "Careers",
    path: "/admin/careers",
    icon: <Briefcase />,
  },
];

const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login");
    },
  });

  return (
    <nav className="flex flex-col justify-between h-screen col-span-1 text-white bg-primary_blue">
    <div>
      <Link href="/">
        <span className="inline-block px-4 my-8 text-3xl">Thanka Digital</span>
      </Link>
      <ul>
        {sidebarLinks.map(link => (
          <Link href={link.path} key={link.id}>
            <li className={`flex items-center gap-4 p-4 hover:bg-primary_red/60 active:bg-primary_red ${pathname===link.path&&'bg-primary_red'}`}>
              {link.icon}
              {link.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
    <button className="py-4 text-primary_red" onClick={() => signOut()}>
      Logout
    </button>
  </nav>
  )
}

export default AdminSidebar