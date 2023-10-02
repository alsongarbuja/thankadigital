import React from "react";
import Link from "next/link";
import Image from "next/image";

import Header from "@/components/Header";
import Social from "@/components/Social";
import { footerLinks } from "@/utils/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <main className="max-w-[90%] mx-auto min-h-[50vh]">{children}</main>
      
      <footer className="py-16 mt-20">
        <div className="max-w-[90%] mx-auto ">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
            <div>
              <span className="flex items-center gap-2 mb-8">
                <Image src="/thanka_digital_logo.svg" alt="Thanka Digital logo" className="w-14 h-14" width={50} height={50} />
                <h5>Thanka Digital</h5>
              </span>
              <Social />
            </div>
            <div className="flex flex-wrap gap-10">
              {
                footerLinks.map((footerLink, index) => (
                  <div className="flex flex-col gap-2" key={index}>
                    <h6>{footerLink.title}</h6>
                    {
                      footerLink.links.map((link, index) => (
                        <p key={index}>
                          {
                            link.href ? (
                              <Link href={link.href} key={index}>{link.text}</Link>
                            ) : (
                              <React.Fragment key={index}>{link.text}</React.Fragment>
                            )
                          }
                        </p>
                      ))
                    }
                  </div>
                ))
              }
            </div>
          </div>
          <hr className="my-8" />
          <p className="font-semibold text-center">&copy; {new Date().getFullYear()} Thanka Digital. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}