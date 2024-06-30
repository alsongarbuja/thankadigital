import Link from "next/link";

import Header from "@/components/Header";
import { footerConnect, footerContacts, footerLinks } from "@/utils/footer";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();
  return (
    <>
      <Header />

      <main className="w-full min-h-[50vh] pt-28">{children}</main>

      <section className="pt-12 pb-20 bg-background_gray">
        <CustomWidthWrapper>
          <div className="flex flex-col items-center gap-6">
            <section className="flex flex-col items-center gap-3">
              <p className="text-3xl font-semibold text-secondary">
                Connect with us
              </p>
              <p className="text-xl font-medium">
                Found us interesting? Let&apos;s have a talk
              </p>
            </section>

            <div className="flex flex-col w-full gap-6 my-6 text-xl md:flex-row md:justify-between">
              <section className="flex flex-col gap-2">
                {footerConnect[0].location?.map((con, i) => (
                  <p key={i}>{con.location}</p>
                ))}
              </section>

              <section className="flex flex-col gap-2">
                {footerConnect[1].connect?.map((con, i) => (
                  <p key={i}>{con.contact}</p>
                ))}
              </section>

              <section className="flex flex-col gap-2">
                {footerConnect[2].socialmedia?.map((con, i) => (
                  <Link href={con.link} key={i}>
                    {con.name}
                  </Link>
                ))}
              </section>
            </div>
          </div>
        </CustomWidthWrapper>
      </section>
      <footer className="pt-6 pb-0 bg-background_lightblue">
        <CustomWidthWrapper>
          <div className="flex flex-col gap-5 py-16 md:flex-row md:justify-between">
            <div className="flex flex-col gap-5 md:flex-row md:gap-36">
              {footerLinks.map((footer, i) => (
                <section className="flex flex-col gap-2 text-xl" key={i}>
                  <p className="my-3 text-2xl font-semibold">
                    {footer.menuTitle}
                  </p>
                  {footer.links.map((link, i) => (
                    <Link href={link.link} key={i} className="group w-fit">
                      {link.name}
                      <hr className="h-0.5 bg-black w-0 group-hover:w-full transition-[width] duration-300" />
                    </Link>
                  ))}
                </section>
              ))}
            </div>

            <section className="flex flex-col gap-2 text-xl">
              <p className="text-2xl font-semibold">Socials</p>
              <div className="flex gap-4">
                {footerContacts.map((con, i) => (
                  <section className="p-2 bg-white rounded-full" key={i}>
                    <Link href={con.link}>{con.icon}</Link>
                  </section>
                ))}
              </div>
            </section>
          </div>

          <div className="flex justify-between mb-12">
            <p className="text-2xl font-semibold">&copy;{year}</p>
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
