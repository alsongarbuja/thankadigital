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
            <h3 className="text-primary_blue">Connect with us</h3>
            <p className="font-medium">
              Found us interesting? Let&apos;s have a talk
            </p>
          </div>

          <div className="flex flex-col justify-between w-full gap-10 md:flex-row md:justify-between">
            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-2">
                <Map className="text-primary_red" /> Location
              </h3>
              {footerConnect[0].location?.map((con, i) => (
                <p key={i}>{con.location}</p>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-2 mb-2">
                <Call className="text-primary_red" /> Contact
              </h3>
              {footerConnect[1].connect?.map((con, i) => (
                <Link
                  href={con.link}
                  key={i}
                  className="underline decoration-primary_red underline-offset-4"
                >
                  {con.contact}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="flex items-center gap-2 mb-2">
                <Message className="text-primary_red" /> Message Us
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </CustomWidthWrapper>
    </section>
  );
};

export default ConnectSection;
