import Link from "next/link";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/utils/auth";
import { sidebarLinks } from "@/utils/adminsidebar";
import AdminSidebarListTile from "./AdminSidebarListTile";
import Image from "next/image";
import { ArrowLeft2, ArrowLeft3 } from "iconsax-react";
import AdminNavUserName from "./AdminNavUserName";

const AdminSidebar = async () => {
  const session = await getServerSession(authOptions);
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const pathname = "/" + fullUrl.split("/").splice(3, 2).join("/");

  if (!session) {
    redirect(`/login?callbackUrl=${pathname}`);
  }

  return (
    <nav className="sticky top-0 flex flex-col justify-between h-screen col-span-1 border-r">
      <div className="px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/thanka_digital_logo.svg"
              alt="Thanka Digital logo"
              className="w-10 h-10 md:w-14 md:h-12"
              width={40}
              height={40}
            />
          </Link>
          <button className="flex items-center">
            <ArrowLeft2 color="grey" />
            <ArrowLeft2 className="-ml-4" variant="Broken" color="grey" />
          </button>
        </div>
        <ul className="flex flex-col gap-2 mt-8">
          {sidebarLinks.map((link) => {
            // if (!link.permissions.includes(session?.user?.email)) return null;
            return <AdminSidebarListTile link={link} key={link.id} />;
          })}
        </ul>
      </div>

      <div className="border-t">
        <AdminNavUserName />
      </div>
    </nav>
  );
};

export default AdminSidebar;
