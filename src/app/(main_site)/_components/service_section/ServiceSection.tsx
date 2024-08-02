import { servicesDatas } from "@/utils/services";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="py-20 bg-background_lightblue">
      <CustomWidthWrapper>
        <div className="w-full mx-auto">
          <h3 className="text-secondary">Services</h3>
          <h6>Quality works you can expect from us</h6>
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
