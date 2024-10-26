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
                <section className="flex flex-col gap-2" key={i}>
                  <h5 className="my-1">{footer.menuTitle}</h5>
                  {footer.links.map((link, i) => (
                    <Link href={link.link} key={i} className="group w-fit">
                      {link.name}
                      <hr className="h-0.5 bg-primary_red w-0 group-hover:w-full transition-[width] duration-300" />
                    </Link>
                  ))}
                </section>
              ))}
            </div>

            <section className="flex flex-col gap-2">
              <h5>Socials</h5>
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
            <h4>&copy; {year}</h4>
            <Link
              href="#top"
              className="text-2xl font-semibold underline rounded-md decoration-primary_red"
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
