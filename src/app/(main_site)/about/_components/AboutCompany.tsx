import Image from "next/image";

const AboutCompany = () => {
  return (
    <>
      <div className="hidden grid-cols-7 lg:grid">
        <div className="col-span-7 px-10 text-white bg-secondary lg:col-span-4 py-14 rounded-t-xl rounded-bl-xl">
          <h2>
            Thanka Digital aims to provide amazing products for our clients
          </h2>
        </div>

        <div className="col-span-7 ml-4 lg:col-span-3 lg:mb-4 rounded-xl">
          <Image
            src="/images/about/company1.png"
            alt="image"
            width={500}
            height={300}
            priority
            className="w-[560px] h-full object-cover rounded-md"
          />
        </div>

        <div className="col-span-7 my-4 mr-4 lg:col-span-3 lg:mt-4 rounded-xl">
          <Image
            src="/images/about/company2.png"
            alt="image"
            width={500}
            height={200}
            className="w-[560px] h-full object-cover rounded-md"
          />
        </div>

        <div className="relative flex items-center col-span-7 px-10 bg-secondary lg:col-span-4 lg:tracking-wide text-[#C9C8F5] py-14 rounded-b-xl">
          <h2 className="my-1">
            We are team of dedicated engineers and designers with years of
            experience.
          </h2>

          <div className="hidden lg:block">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-bl-2xl"></div>
            <div className=" absolute w-11 h-11 rounded-full bg-[#C9C8F5] top-1 right-1"></div>
            <div className="absolute top-0 right-0 ">
              <svg
                width="100"
                height="100"
                viewBox="0 0 70 70"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 13.75C0 6.15609 6.15609 0 13.75 0C21.3439 0 27.5 6.15608 27.5 13.75V24C27.5 32.2843 34.2157 39 42.5 39H55C63.2843 39 70 45.7157 70 54V55C70 63.2843 63.2843 70 55 70H15C6.71573 70 0 63.2843 0 55V13.75Z"
                  fill="#FFB8B8"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* for md and small */}
      <div className="lg:hidden bg-secondary rounded-xl">
        <h3 className="px-6 tracking-wider text-center text-white py-14">
          Thanka Digital aims to provide amazing products for our clients
        </h3>

        <div className="max-w-[90%] bg-white lg:mb-4 border-y-[20px] border-r-[20px] border-white rounded-r-2xl">
          <Image
            src="/images/about/company1.png"
            alt="image"
            width={700}
            height={300}
            priority
            className="w-full h-full object-cover rounded-2xl aspect-[16/9]"
          />
        </div>

        <h3 className="px-10 text-center about-text py-14 text-[#C9C8F5]">
          We are team of dedicated engineers and designers with years of
          experience.
        </h3>

        <div className="flex justify-end">
          <div className="w-[95%] bg-white lg:mb-4 border-t-[20px] border-l-[20px] border-white rounded-tl-2xl">
            <Image
              src="/images/about/company2.png"
              alt="image"
              width={400}
              height={300}
              className=" w-full h-full object-cover rounded-2xl aspect-[16/9]"
            />
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default AboutCompany;
