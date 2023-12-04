"use client"

import { getFromLocalStorage } from "@/helpers/localstorage"
import { useEffect, useState } from "react"

const AdminNavUserName = () => {
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const email = getFromLocalStorage("thanka_email")
    if (email) {
      setUsername(email)
    }
  }, [])

  return (
    <p>{username}</p>
  )
}

export default AdminNavUserName