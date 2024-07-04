import { servicesDatas } from "@/utils/services";
import Image from "next/image";

interface IServiceCardProps {
  serviceCardData: (typeof servicesDatas)[0];
}

const ServiceCard = ({ serviceCardData }: IServiceCardProps) => {
  return (
    <div
      className={`w-full px-8 py-4 min-h-[280px] place-content-center ${
        serviceCardData.variant === "white"
          ? "bg-white"
          : serviceCardData.variant === "black"
          ? "bg-black text-white"
          : "bg-primary_red text-white"
      } ${
        serviceCardData.colSpan === 3
          ? "col-span-1 sm:col-span-2 lg:col-span-3"
          : ""
      } ${
        serviceCardData.colSpan === 1
          ? "col-span-1"
          : "col-span-1 lg:col-span-2"
      } 
      rounded-md 
      `}
    >
      <div className="flex flex-col-reverse items-center sm:flex-row gap-7">
        <div>
          <p className="text-2xl font-bold">{serviceCardData.title}</p>
          <p>{serviceCardData.description}</p>
        </div>
        {serviceCardData.image && (
          <Image
            width={250}
            height={180}
            src="/images/web-app.png"
            alt="image"
            className="pr-2 sm:pr-4 lg:pr-6"
          />
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
