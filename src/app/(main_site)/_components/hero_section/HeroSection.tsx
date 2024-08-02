import Image from "next/image";
import Link from "next/link";

import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import HeroJourneySection from "./HeroJourneySection";
import { Coffee } from "react-feather";
import Particles from "./Particles";

const HeroSection = () => {
  return (
    <div className="relative">
      <Particles className="absolute inset-0 pointer-events-none" />
      <div className="absolute top-0 -translate-x-1/2 left-1/2 blob"></div>
      <CustomWidthWrapper>
        <div className="relative flex flex-col items-center justify-center gap-8 py-3 md:pb-24 hero-section">
          {/* <Image
            src="/images/hero.png"
            width={800}
            height={500}
            priority
            className="w-full h-full ml-8"
            alt={"Helping you in each step of your business"}
          /> */}
          <h1 className="mt-4 font-medium text-center font-playfair">
            Helping you in{" "}
            <span className="px-4 pb-1 text-white bg-primary_blue">
              each and every
            </span>{" "}
            <br />
            <span className="px-4 pb-1 text-white bg-primary_red">step</span> of
            your great business
          </h1>

          <h5 className="max-w-2xl font-medium text-center">
            We are a team of experts who are here to help you in each step of
            your business. We provide services that will help you grow your
            business
          </h5>

          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              href="/work"
              className="px-6 py-4 text-white rounded-full bg-primary_blue/90"
            >
              Works done
            </Link>
            <Link
              href="#connect-section"
              className="flex items-center justify-center gap-2 px-6 py-4 text-white rounded-full bg-neutral_black"
            >
              <Coffee /> Connect with us
            </Link>
          </div>
        </div>
      </CustomWidthWrapper>

      <HeroJourneySection />
    </div>
  );
};

export default HeroSection;
