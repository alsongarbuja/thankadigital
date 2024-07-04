import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import AboutCompany from "./_components/AboutCompany";
import CoreMembers from "./_components/CoreMembers";
import Members from "./_components/Members";

export default function AboutPage() {
  return (
    <CustomWidthWrapper>
      <AboutCompany />
      <CoreMembers />
      <Members />
    </CustomWidthWrapper>
  );
}
