import { PropsWithChildren } from "react";
import AdminSidebar from "../_components/AdminSidebar";
import AdminNavbar from "../_components/AdminNavbar";

const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid grid-cols-5">
      <AdminSidebar />
      <section className="col-span-4">
        <AdminNavbar />
        <div className="p-6">
          {children}
        </div>
      </section>
    </main>
  )
}

export default AdminLayout