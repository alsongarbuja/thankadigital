import { PropsWithChildren } from "react";
import AdminSidebar from "../_components/AdminSidebar";
import AdminNavbar from "../_components/AdminNavbar";
// import { getServerSession } from "next-auth";
// import { authOptions } from "@/utils/auth";

const AdminLayout = ({ children }: PropsWithChildren) => {
  // const session = getServerSession(authOptions);

  return (
    <main className="grid grid-cols-6">
      <AdminSidebar />
      <section className="col-span-5">
        <AdminNavbar />
        <div className="p-6">
          {children}
        </div>
      </section>
    </main>
  )
}

export default AdminLayout