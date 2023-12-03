"use client"

import { PropsWithChildren } from 'react'
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Loader } from 'react-feather';
import { signIn, useSession } from "next-auth/react";

const LoginForm = ({ children }: PropsWithChildren) => {
  const search = useSearchParams();
  const { data: session } = useSession();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get("email")
    const password = formData.get("password")

    await signIn("credentials", {
      email,
      password,
    });
  }

  useEffect(() => {
    if (session?.user) {
      router.push("/admin/dashboard");
    }
    if (search.get("error") && search.get("error") === "CredentialsSignin") {
      setError("Incorrect Email or passowrd");
    }
  }, []);

  return (
    <form className="flex flex-col gap-4 w-96" onSubmit={submitLogin}>
      {error && (
        <div className="text-sm font-medium text-center text-red-500">
          {error}
        </div>
      )}
      {children}
      <button type="submit" className="flex items-center justify-center gap-2 p-2 text-white rounded-md bg-primary_blue">
        {isSubmitting ? <>
          Logging in... <Loader className="animate-spin" />
        </> : "Login"}
      </button>
    </form>
  )
}

export default LoginForm