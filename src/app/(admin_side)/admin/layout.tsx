import { PropsWithChildren } from "react";
import AdminSidebar from "../_components/AdminSidebar";


const AdminLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="grid grid-cols-5">
      <AdminSidebar />
      <section className="col-span-4 p-6">
        {children}
      </section>
    </main>
  )
}

export default AdminLayout