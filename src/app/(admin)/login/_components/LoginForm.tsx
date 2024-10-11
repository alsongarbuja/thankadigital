"use client";

import { signIn } from "next-auth/react";
import type { Session } from "next-auth";
import { PropsWithChildren } from "react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { addToLocalStorage } from "@/helpers/localstorage";
import { Refresh2 } from "iconsax-react";

interface LoginFormProps {
  session: Session | null;
}

const LoginForm = ({
  children,
  session,
}: PropsWithChildren<LoginFormProps>) => {
  const search = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    await signIn("credentials", {
      email,
      password,
      callbackUrl: (search.get("callbackUrl") as string) ?? "/admin/dashboard",
    });
  };

  useEffect(() => {
    if (session) {
      if (session?.user) {
        addToLocalStorage("thanka_email", session?.user?.email as string);
        if (search.get("callbackUrl")) {
          router.push(search.get("callbackUrl") as string);
        } else {
          router.push("/admin/dashboard");
        }
      }
    }
    if (search.get("error") && search.get("error") === "CredentialsSignin") {
      setError("Incorrect Email or password");
    }
  }, [session, router, search]);

  return (
    <form className="flex flex-col gap-4 w-96" onSubmit={submitLogin}>
      {error && (
        <div className="text-sm font-medium text-center text-red-500">
          {error}
        </div>
      )}
      {children}
      <button
        type="submit"
        className="flex items-center justify-center gap-2 p-2 text-white rounded-md bg-primary_blue"
      >
        {isSubmitting ? (
          <>
            Logging in... <Refresh2 className="animate-spin" />
          </>
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
