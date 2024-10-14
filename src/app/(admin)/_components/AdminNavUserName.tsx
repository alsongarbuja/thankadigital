"use client";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/helpers/localstorage";
import { LogoutCurve } from "iconsax-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const AdminNavUserName = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const email = getFromLocalStorage("thanka_email");
    if (email) {
      setUsername(email);
    }
  }, []);

  const handleLogout = () => {
    if (!confirm("Are you sure you want to logout?")) return;
    signOut();
    removeFromLocalStorage("thanka_email");
  };

  return (
    <div className="flex items-center justify-between gap-4 px-4 py-2">
      <Image
        src={`https://api.dicebear.com/9.x/initials/png?seed=${username}`}
        alt="profile initials"
        width={40}
        height={40}
        className="rounded-full"
      />
      <button
        className="py-4 text-primary_red"
        aria-label="logout button"
        onClick={handleLogout}
      >
        <LogoutCurve className="rotate-180" />
      </button>
    </div>
  );
};

export default AdminNavUserName;
