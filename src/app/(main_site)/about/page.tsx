import type { Metadata } from "next";

import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import AboutCompany from "./_components/AboutCompany";
import CoreMembers from "./_components/CoreMembers";
import Members from "./_components/Members";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know about thanka digital and people working behind the scenes.",
};

export default function AboutPage() {
  return (
    <CustomWidthWrapper className="pt-12">
      <AboutCompany />
      <CoreMembers />
      <Members />
    </CustomWidthWrapper>
  );
}
