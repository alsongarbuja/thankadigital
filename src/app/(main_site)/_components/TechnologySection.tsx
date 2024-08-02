import Image from "next/image";
import Marquee from "react-fast-marquee";

import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import { technologies } from "@/utils/technology";

const TechnologySection = () => {
  return (
    <section className="pt-8 pb-4 text-white bg-primary_blue">
      <CustomWidthWrapper>
        <h3>Technologies</h3>
        <h6 className="font-medium">
          Using modern technologies to build great products
        </h6>
      </CustomWidthWrapper>

      <div className="">
        <Marquee autoFill className="p-3" speed={70}>
          {technologies[0].map((tech, i) => (
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
      </div>

      {/* <Marquee
        autoFill
        className="p-3"
        speed={60}
        direction="right"
        pauseOnHover
      >
        {technologies[1].map((tech, i) => (
          <section key={i}>
            <Image
              src={tech}
              alt="Technologies images"
              width={150}
              height={150}
              className="p-4 mx-8"
            />
          </section>
        ))}
      </Marquee>

      <Marquee autoFill className="p-3" speed={50} pauseOnHover>
        {technologies[2].map((tech, i) => (
          <section key={i}>
            <Image
              src={tech}
              alt="Technologies images"
              width={120}
              height={150}
              className="p-4 mx-20"
            />
          </section>
        ))}
      </Marquee> */}
    </section>
  );
};

export default TechnologySection;
