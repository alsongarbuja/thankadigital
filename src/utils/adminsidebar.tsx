import { Briefcase, FileText, Grid, Users } from "react-feather";

export const sidebarLinks = [
  {
    id: 0,
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <Grid />,
    permissions: ["superadmin", "admin", "content-writer"],
  },
  {
    id: 1,
    name: "Users",
    path: "/admin/users",
    icon: <Users />,
    permissions: ["superadmin", "admin"],
  },
  {
    id: 2,
    name: "Blogs",
    path: "/admin/blogs",
    icon: <FileText />,
    permissions: ["superadmin", "admin", "content-writer"],
  },
  {
    id: 3,
    name: "Careers",
    path: "/admin/careers",
    icon: <Briefcase />,
    permissions: ["superadmin", "admin"],
  },
];