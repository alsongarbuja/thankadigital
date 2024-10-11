import Link from "next/link";
import { Call, Map, Message } from "iconsax-react";

import { footerConnect } from "@/utils/footer";
import ContactForm from "./connect_section/ContactForm";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

const ConnectSection = () => {
  return (
    <section
      className="py-20 bg-background_gray"
      id="connect-section"
      style={{ scrollMarginBlockStart: "3em" }}
    >
      <CustomWidthWrapper>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-secondary">Connect with us</h3>
            <h6 className="font-medium">
              Found us interesting? Let&apos;s have a talk
            </h6>
          </div>

          <div className="flex flex-col justify-between w-full gap-10 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-2xl font-bold">
                <Map className="text-primary_red" /> Location
              </p>
              {footerConnect[0].location?.map((con, i) => (
                <p key={i} className="text-xl">
                  {con.location}
                </p>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 mb-2 text-2xl font-bold">
                <Call className="text-primary_red" /> Contact
              </p>
              {footerConnect[1].connect?.map((con, i) => (
                <Link
                  href={con.link}
                  key={i}
                  className="text-xl underline decoration-primary_red underline-offset-3"
                >
                  {con.contact}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 mb-2 text-2xl font-bold">
                <Message className="text-primary_red" /> Message Us
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </CustomWidthWrapper>
    </section>
  );
};

export default ConnectSection;
