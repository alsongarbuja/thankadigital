import Link from "next/link";

import Header from "@/app/(main_site)/_components/layout/Header";
import { footerContacts, footerLinks } from "@/utils/footer";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import ConnectSection from "./_components/ConnectSection";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();
  return (
    <>
      <Header />
      <main className="w-full min-h-[50vh]" id="top">
        {children}
      </main>
      <ConnectSection />
      <footer className="pt-6 pb-0 bg-background_lightblue">
        <CustomWidthWrapper>
          <div className="flex flex-col gap-5 py-16 md:flex-row md:justify-between">
            <div className="flex flex-row flex-wrap gap-12">
              {footerLinks.map((footer, i) => (
                <section className="flex flex-col gap-2 text-xl" key={i}>
                  <p className="my-1 text-lg font-semibold">
                    {footer.menuTitle}
                  </p>
                  {footer.links.map((link, i) => (
                    <Link
                      href={link.link}
                      key={i}
                      className="text-lg font-medium group w-fit"
                    >
                      {link.name}
                      <hr className="h-0.5 bg-black w-0 group-hover:w-full transition-[width] duration-300" />
                    </Link>
                  ))}
                </section>
              ))}
            </div>

            <section className="flex flex-col gap-2 text-xl">
              <p className="text-lg font-semibold">Socials</p>
              <div className="flex gap-4">
                {footerContacts.map((con, i) => (
                  <section className="p-2 bg-white rounded-full" key={i}>
                    <Link href={con.link} aria-label={con.name}>
                      {con.icon}
                    </Link>
                  </section>
                ))}
              </div>
            </section>
          </div>

          <div className="flex justify-between mb-12">
            <p className="text-2xl font-semibold">&copy; {year}</p>
            <Link
              href="#top"
              className="text-2xl font-semibold underline rounded-md"
            >
              Go to top
            </Link>
          </div>
        </CustomWidthWrapper>

        <div className="bg-fixed bg-bottom bg-no-repeat bg-contain bg-parallax h-28 md:h-72"></div>
      </footer>
    </>
  );
}
