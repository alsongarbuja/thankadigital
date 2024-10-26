import Image from "next/image";
import Marquee from "react-fast-marquee";

import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { technologies } from "@/utils/technology";

const TechnologySection = () => {
  return (
    <section className="pt-8 pb-4 text-white bg-blue-950">
      <CustomWidthWrapper>
        <h3>Technologies</h3>
        <p className="font-medium">
          Using modern technologies to build great products
        </p>
      </CustomWidthWrapper>

      <Marquee autoFill className="p-3" speed={70}>
        {technologies.map((tech, i) => (
          <section key={i}>
            <Image
              src={tech}
              alt="Technologies images"
              width={120}
              height={100}
              className="p-4 mx-10 w-fit h-fit"
            />
          </section>
        ))}
      </Marquee>
    </section>
  );
};

export default TechnologySection;
