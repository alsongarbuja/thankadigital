import { Briefcase, Category2, Profile2User, UserSquare } from "iconsax-react";

export const sidebarLinks = [
  {
    id: 0,
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: <Category2 />,
    permissions: ["superadmin", "admin", "content-writer"],
  },
  {
    id: 1,
    name: "Users",
    path: "/admin/users",
    icon: <Profile2User />,
    permissions: ["superadmin", "admin"],
  },
  {
    id: 2,
    name: "Members",
    path: "/admin/teams",
    icon: <UserSquare />,
    permissions: ["superadmin", "admin"],
  },
  {
    id: 3,
    name: "Careers",
    path: "/admin/careers",
    icon: <Briefcase />,
    permissions: ["superadmin", "admin"],
  },
  {
    id: 4,
    name: "Projects",
    path: "/admin/projects",
    icon: <Briefcase />,
    permissions: ["superadmin", "admin"],
  },
];
