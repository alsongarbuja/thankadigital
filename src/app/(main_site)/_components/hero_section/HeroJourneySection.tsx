"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroJourneySection = () => {
  return (
    <section className="relative w-screen my-12">
      <motion.svg
        width="2000"
        height="300"
        viewBox="0 0 1830 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        <motion.path
          d="M1.06758 45.3432C65.1521 4.6375 253.612 -43.2936 494.778 90.6276C796.234 258.029 851.5 204 950.668 93.3186C983.94 56.1842 1017.52 -48.7283 1331.3 46.511C1582.32 122.702 1767.74 47.9838 1829.07 1.1006"
          stroke="#333D79"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ delay: 0.1, duration: 2 }}
          viewport={{ once: true }}
        />
      </motion.svg>

      <div className="flex flex-wrap absolute top-0 justify-around w-[90%] left-1/2 -translate-x-1/2">
        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.75 }}
          viewport={{ once: true }}
        >
          <Image
            // src="/images/hero-section-images/hero-section-img1.png"
            src="/images/landing/standing.png"
            alt="illustration of a woman standing infront of a computer"
            width={200}
            height={200}
            className="object-contain w-full md:w-[22vw] h-full"
          />
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <Image
            src="/images/landing/walking.png"
            alt="illustration of a woman walking towards a computer"
            width={200}
            height={200}
            className="object-contain w-[22vw] h-full"
          />
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <Image
            src="/images/landing/running.png"
            alt="illustration of a woman running away from a computer"
            width={200}
            height={200}
            className="object-contain w-[22vw] h-full"
          />
        </motion.figure>

        <motion.figure
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          <Image
            src="/images/landing/cycling.png"
            alt="illustration of a woman cycling at a park"
            width={200}
            height={200}
            className="object-contain w-[22vw] h-full"
          />
        </motion.figure>
      </div>
    </section>
  );
};

export default HeroJourneySection;
