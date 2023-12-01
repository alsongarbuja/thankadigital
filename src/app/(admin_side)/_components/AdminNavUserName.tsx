"use client"

import { getFromLocalStorage } from "@/helpers/localstorage"
import { useEffect, useState } from "react"

const AdminNavUserName = () => {
  const [username, setUsername] = useState("");
  
  useEffect(() => {
    const user = JSON.parse(getFromLocalStorage("thanka_user"))
    if (user) {
      setUsername(user.name)
    }
  }, [])

  return (
    <p>{username}</p>
  )
}

export default AdminNavUserName