import Image from "next/image";

const helpingMembers = [
  {
    name: "Prashiddha Khadka",
    position: "Flutter Developer",
    image: "/images/about/prasid.png",
  },
  {
    name: "Manika Gurung",
    position: "UI/UX",
    image: "/images/about/manika.png",
  },
  {
    name: "Binod Adhikari",
    position: "Web Developer",
    image: "/images/about/binod.png",
  },
  // {
  //   name: "Santosh Bhandari ",
  //   position: "Flutter Developer",
  //   image: "/images/about/prasid.png",
  // },
];

const Members = () => {
  return (
    <main className="w-full my-14">
      <div className="mt-24 mb-8 ">
        <p className="text-4xl font-bold text-center text-secondary">
          Who are helping us
        </p>
        <p className="text-xl font-semibold text-center">
          People who help us build great products
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center w-full gap-6 ">
        {helpingMembers.map((hMember, i) => (
          <div className="relative w-72 h-80" key={i}>
            <Image
              src={hMember.image}
              alt={hMember.name}
              width={400}
              height={300}
              className="object-cover h-full rounded-lg"
            />
            <div className="absolute top-0 bottom-0 h-full rounded-lg w-72 bg-black/20"></div>

            <div className="absolute bottom-4 left-8">
              <p className="text-lg font-semibold text-white ">
                {hMember.name}
              </p>
              <p className="text-sm font-light text-white ">
                {hMember.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Members;
