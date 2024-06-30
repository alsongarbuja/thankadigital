import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import AboutCompany from "../_components/AboutCompany";
import CoreMembers from "../_components/CoreMembers";
import Members from "../_components/Members";

const AboutPage = () => {
  return (
    <CustomWidthWrapper>
      <AboutCompany />
      <CoreMembers />
      <Members />
    </CustomWidthWrapper>
  );
};

export default AboutPage;
