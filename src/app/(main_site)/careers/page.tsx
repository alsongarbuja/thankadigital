import { getCareers } from "@/server/controllers/career.controller";
import CareerList from "./careerList";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

export default async function CareerPage() {
  const careerList: dynamicObject = await getCareers();

  return (
    <CustomWidthWrapper className="py-12">
      <div className="min-h-[60vh]">
        <h1>Career opportunities</h1>
        <p className="pb-12 font-medium text-gray-600 border-b border-gray-200">
          We are always looking for passionate people to join our team. Feel
          free to contact us even if you don't see an opening.
        </p>
        <CareerList careerList={careerList.careers} />
      </div>
    </CustomWidthWrapper>
  );
}
