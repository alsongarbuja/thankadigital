"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { addToLocalStorage } from "@/helpers/localstorage";
import { ArrowLeft, Loader } from "react-feather";

export default function LoginPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const submitLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    if (email && password) {
      fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      }).then(res => res.json()).then(res => {
        if (res.user) {
          addToLocalStorage("user", JSON.stringify(res.user))
          addToLocalStorage("token", res.token)

          router.push("/admin/dashboard")
        } else {
          console.log(res)
        }
      }).catch(e => {
        console.log(e)
      }).finally(() => setIsSubmitting(false))
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="p-6 rounded-md shadow-md w-fit">
        <h1 className="mb-4 text-2xl font-semibold text-center">Login</h1>
        <form className="flex flex-col gap-4 w-96" onSubmit={submitLogin}>
          <div className="w-full">
            <label htmlFor="email" className="block font-bold">Email</label>
            <input required type="email" name="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block font-bold">Password</label>
            <input required name="password" type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" className="flex items-center justify-center gap-2 p-2 text-white rounded-md bg-primary_blue">
            {isSubmitting ? <>
              Logging in... <Loader className="animate-spin" />
            </> : "Login"}
          </button>
        </form>
        <Link href="/" className="flex items-center justify-end gap-2 mt-4 text-right underline text-primary_blue">
          <ArrowLeft className="w-5 h-5" /> Back to website
        </Link>
      </div>
    </div>
  )
}