import Link from "next/link";
import { Coffee } from "iconsax-react";

import Particles from "./Particles";
import HeroJourneySection from "./HeroJourneySection";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { cn } from "@/utils/cn";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      <Particles className="absolute inset-0 pointer-events-none" />
      <div className="absolute -translate-x-1/2 -top-2 left-1/2 blob"></div>
      <div className="absolute -left-32 bottom-12 blob blob-long"></div>
      <div className="absolute bottom-0 -right-12 blob blob-wide"></div>
      <CustomWidthWrapper>
        <div className="relative flex flex-col items-center justify-center gap-8 py-3 md:pb-24 hero-section">
          <h1 className="mt-4 text-center">
            Helping you in{" "}
            <span className="px-4 text-white md:pb-2 bg-primary_blue">
              each and every
            </span>{" "}
            <br />
            <span className="px-4 text-white md:pb-3 bg-primary_red">
              step
            </span>{" "}
            of your great business
          </h1>

          <p className="max-w-2xl font-medium text-center">
            We are a team of experts who are here to help you in each step of
            your business. We provide services that will help you grow your
            business
          </p>

          <div className="flex flex-col items-center gap-4 md:flex-row">
            <Link
              href="/work"
              className="px-6 py-4 text-center text-white rounded-full bg-primary_blue/90"
            >
              Works done
            </Link>
            <Link
              href="#connect-section"
              className={cn(
                "animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide",
                "bg-[linear-gradient(110deg,#09090B,45%,#27272A,55%,#09090B)] text-zinc-200 border-zinc-800",
                "flex items-center justify-center gap-2 px-6 py-4 rounded-full"
              )}
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
