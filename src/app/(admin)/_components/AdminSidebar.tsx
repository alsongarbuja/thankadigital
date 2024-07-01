import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/utils/auth";
import { sidebarLinks } from "@/utils/adminsidebar";
import AdminSidebarListTile from "./AdminSidebarListTile";

const AdminSidebar = async () => {
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const fullUrl = headersList.get("referer")||"";
  const pathname = "/"+fullUrl.split("/").splice(3, 2).join("/");

  if(!session) {
    redirect(`/login?callbackUrl=${pathname}`);
  }

  return (
    <nav className="flex flex-col justify-between h-screen col-span-1 text-white bg-primary_blue">
    <div>
      <Link href="/">
        <span className="inline-block px-4 my-8 text-3xl">Thanka Digital</span>
      </Link>
      <ul>
        {sidebarLinks.map(link => {
          // @ts-ignore
          if (!link.permissions.includes(session?.user?.role)) return null;
          return (
            <AdminSidebarListTile link={link} key={link.id} />
          )}
        )}
      </ul>
    </div>
  </nav>
  )
};

export default AdminSidebar