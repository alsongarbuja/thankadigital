"use client"

import Link from "next/link";
import { Grid, Users } from "react-feather";
import { usePathname, useRouter } from "next/navigation";
import { getFromLocalStorage, removeFromLocalStorage } from "@/helpers/localstorage";

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
    icon: <Grid />,
  },
  {
    id: 3,
    name: "Careers",
    path: "/admin/careers",
    icon: <Grid />,
  },
];

const AdminSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const logout = async () => {
    try {
      const res = await fetch("/api/admin/logout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          token: getFromLocalStorage("thanka_token")
        }),
      });
      const data = await res.json();
      if(res.status === 200) {
        removeFromLocalStorage("thanka_user");
        removeFromLocalStorage("thanka_token");

        router.replace("/");
      } else {
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      console.log("logout");
    }
  }

  return (
    <nav className="flex flex-col justify-between h-screen col-span-1 text-white bg-primary_blue">
    <div>
      <span className="inline-block px-4 my-8 text-3xl">Thanka Digital</span>
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
    <button className="py-4 text-primary_red" onClick={logout}>
      Logout
    </button>
  </nav>
  )
}

export default AdminSidebar