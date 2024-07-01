import Image from "next/image";

const CoreMembers = () => {
  return (
    <section className="my-14">
      <div className="mb-8 ">
        <p className="text-4xl font-bold text-center text-secondary">
          Meet the team
        </p>
        <p className="text-xl font-semibold text-center">
          Behind the process of your product
        </p>
      </div>

      <div className="hidden grid-cols-8 sm:grid ">
        <div className="flex-col items-center justify-center col-span-2 ">
          <Image
            src="/images/about/alson.png"
            alt="image"
            width={600}
            height={500}
            className=" object-contain aspect-[4/3] "
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Alson Garbuja
          </p>
          <p className="text-xl font-bold text-center">CEO</p>
        </div>

        <div className="col-span-0 sm:col-span-4 md:col-span-1"></div>

        <div className="col-span-2 ">
          <Image
            src="/images/about/bipin.png"
            alt="image"
            width={600}
            height={500}
            className=" object-contain aspect-[4/3]"
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Bipin Adhikari
          </p>
          <p className="text-xl font-bold text-center">CFO</p>
        </div>

        <div className=" sm:col-span-3 md:col-span-1"></div>
        <div className="flex-col items-center justify-center col-span-2 ">
          <Image
            src="/images/about/sunil.png"
            alt="image"
            width={600}
            height={500}
            className=" object-contain aspect-[4/3] "
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Sunil Paudel
          </p>
          <p className="text-xl font-bold text-center">COO</p>
        </div>
        <div className=" sm:col-span-3 md:col-span-2"></div>

        <div className="flex-col items-center justify-center col-span-2">
          <Image
            src="/images/about/susant.png"
            alt="image"
            width={600}
            height={500}
            className=" object-contain aspect-[4/3] "
          />
          <p className="text-xl font-bold text-center text-secondary">
            Susant Basnet
          </p>
          <p className="text-xl font-bold text-center">CMO</p>
        </div>
        <div className="sm:col-span-4 md:col-span-1"></div>

        <div className="flex-col items-center justify-center col-span-2 ">
          <Image
            src="/images/about/utsab.png"
            alt="image"
            width={600}
            height={500}
            className=" object-contain aspect-[4/3] sm:aspect-auto md:aspect-[4/3]"
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Utsab Gurung
          </p>
          <p className="text-xl font-bold text-center">CTO</p>
        </div>
      </div>

      {/* for small */}
      <div className="flex flex-col items-center justify-center gap-4 sm:hidden">
        <div className="flex-col items-center justify-center ">
          <Image
            src="/images/about/ceo.png"
            alt="image"
            width={600}
            height={500}
            className="object-contain aspect-[4/3]"
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Alson Garbuja
          </p>
          <p className="text-xl font-bold text-center">CEO</p>
        </div>

        <div className="">
          <Image
            src="/images/about/cfo.png"
            alt="image"
            width={600}
            height={500}
            className="object-contain aspect-[4/3] "
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Bipin Adhikari
          </p>
          <p className="text-xl font-bold text-center">CFO</p>
        </div>

        <div className="flex-col items-center justify-center ">
          <Image
            src="/images/about/coo.png"
            alt="image"
            width={600}
            height={500}
            className="  object-contain aspect-[4/3] "
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Sunil Paudel
          </p>
          <p className="text-xl font-bold text-center">COO</p>
        </div>

        <div className="flex-col items-center justify-center ">
          <Image
            src="/images/about/cmo.png"
            alt="image"
            width={600}
            height={500}
            className=" object-contain aspect-[4/3]"
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Susant Basnet
          </p>
          <p className="text-xl font-bold text-center">CMO</p>
        </div>

        <div className="flex-col items-center justify-center ">
          <Image
            src="/images/about/cto.png"
            alt="image"
            width={600}
            height={500}
            className=" object-contain aspect-[4/3]"
          />
          <p className="mt-2 text-xl font-bold text-center text-secondary">
            Utsab Gurung
          </p>
          <p className="text-xl font-bold text-center">CTO</p>
        </div>
      </div>
    </section>
  );
};

export default CoreMembers;
