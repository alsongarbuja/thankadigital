"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebarListTile = ({ link }: {
  link: {
    id: number;
    name: string;
    path: string;
    icon: React.ReactNode;
  }
}) => {
  const pathname = usePathname();

  return (
    <Link href={link.path} key={link.id}>
      <li className={`flex items-center gap-4 p-4 hover:bg-primary_red/60 active:bg-primary_red ${pathname===link.path&&'bg-primary_red'}`}>
        {link.icon}
        {link.name}
      </li>
    </Link>
  )
}

export default AdminSidebarListTile