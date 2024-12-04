"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const AdminSidebarListTile = ({
  link,
}: {
  link: {
    id: number;
    name: string;
    path: string;
    icon: React.ReactNode;
  };
}) => {
  const pathname = usePathname();

  return (
    <Link href={link.path} key={link.id}>
      <li
        className={`flex items-center gap-4 py-3 px-4 rounded-md ${
          RegExp(link.path).test(pathname)
            ? "bg-primary_red text-white"
            : "hover:bg-primary_red/20"
        }`}
      >
        <span className="min-w-12">{link.icon}</span>
        {link.name}
      </li>
    </Link>
  );
};

export default AdminSidebarListTile;
