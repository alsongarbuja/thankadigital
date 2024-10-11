"use client";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/helpers/localstorage";
import { LogoutCurve } from "iconsax-react";
import { signOut } from "next-auth/react";
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
    <div className="flex items-center gap-4">
      <p>{username}</p>
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
