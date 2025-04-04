import { JWT } from "next-auth/jwt";
import type { AuthOptions, DefaultUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { login } from "@/server/controllers/auth.controller";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (typeof credentials !== "undefined") {
          const res = await login(
            credentials.email,
            credentials.password
          );
          if (typeof res !== "undefined") {
            return { ...(res.user as unknown as DefaultUser), apiToken: res.token };
          } else {
            return null;
          }
        } else {
          return null;
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      const sanitizedToken = Object.keys(token).reduce((p, c) => {
        // strip unnecessary properties
        if (c !== "iat" && c !== "exp" && c !== "jti" && c !== "apiToken") {
          return { ...p, [c]: token[c] };
        } else {
          return p;
        }
      }, {});
      return { ...session, user: sanitizedToken, apiToken: token.apiToken };
    },
    async jwt({ token, user }) {
      if (typeof user !== "undefined") {
        // user has just signed in so the user object is populated
        return user as unknown as JWT;
      }
      return token;
    },
  },
};
