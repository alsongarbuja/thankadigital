import { servicesDatas } from "@/utils/services";
import CustomWidthWrapper from "../wrappers/CustomWidthWrapper";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="py-20 bg-background_lightblue">
      <CustomWidthWrapper>
        <div className="w-full mx-auto">
          <p className="text-2xl font-bold text-secondary">Services</p>
          <p className="text-xl font-bold ">
            What you can get by connecting with us
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
            {servicesDatas.map((serviceData, i) => (
              <ServiceCard serviceCardData={serviceData} key={i} />
            ))}
          </div>
        </div>
      </CustomWidthWrapper>
    </section>
  );
};

export default ServiceSection;
