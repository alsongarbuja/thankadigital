import Image from "next/image";
import Marquee from "react-fast-marquee";

import CustomWidthWrapper from "../wrappers/CustomWidthWrapper";
import { technologies } from "@/utils/technology";

const TechnologySection = () => {
  return (
    <section className="my-3 mb-6">
      <CustomWidthWrapper>
        <p className="text-2xl font-semibold text-secondary">Technologies</p>
        <p className="text-xl font-semibold">
          We use modern tech stack to build great products
        </p>
      </CustomWidthWrapper>

      <div className="mt-6">
        <Marquee autoFill className="p-3" speed={40} pauseOnHover>
          {technologies[0].map((tech, i) => (
            <section key={i}>
              <Image
                src={tech}
                alt="Technologies images"
                width={150}
                height={150}
                className="p-4 mx-20"
              />
            </section>
          ))}
        </Marquee>
      </div>

      <Marquee
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
      </Marquee>
    </section>
  );
};

export default TechnologySection;
