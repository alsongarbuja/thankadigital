import Image from "next/image";
import Link from "next/link";

import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import HeroJourneySection from "./HeroJourneySection";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center">
      <CustomWidthWrapper>
        <section className="relative flex flex-col items-center justify-center py-3 md:py-12 hero-section">
          <Image
            src="/images/hero.png"
            width={800}
            height={500}
            priority
            className="w-full h-full ml-8"
            alt={"Helping you in each step of your business"}
          />
          {/* <h1 className="text-center">
            Helping you in{" "}
            <span className="px-2 text-white rounded-md bg-secondary">
              each
            </span>
            <br />
            <span className="px-2 text-white rounded-md bg-primary">step</span>
            &nbsp;
            <span className="inline-block mt-11">of</span>&nbsp;
            <span className="inline-block mt-16">your</span>&nbsp;
            <span className="">business</span>
          </h1> */}

          <div className="flex flex-col gap-4 -mt-10 md:flex-row">
            <Link
              href="/work"
              className="px-8 py-3 text-white rounded-full bg-primary_blue"
            >
              Works we have done
            </Link>
            <Link
              href="#connect-section"
              className="flex items-center justify-center px-8 py-2 border rounded-full border-primary_blue text-primary_blue"
            >
              Connect with us
            </Link>
          </div>
        </section>
      </CustomWidthWrapper>

      <HeroJourneySection />
    </section>
  );
};

export default HeroSection;
