import Link from "next/link";
import { ArrowLeft } from "react-feather";

import LoginForm from "./_components/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="p-6 rounded-md shadow-md w-fit">
        <h1 className="mb-4 text-2xl font-semibold text-center">Login</h1>
        <LoginForm>
          <div className="w-full">
            <label htmlFor="email" className="block font-bold">Email</label>
            <input required type="email" name="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="w-full">
            <label htmlFor="password" className="block font-bold">Password</label>
            <input required name="password" type="password" id="password" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </LoginForm>
        <Link href="/" className="flex items-center justify-end gap-2 mt-4 text-right underline text-primary_blue">
          <ArrowLeft className="w-5 h-5" /> Back to website
        </Link>
      </div>
    </div>
  )
}