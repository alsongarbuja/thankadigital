import { getCareers } from "@/server/controllers/career.controller";
import CareerList from "./careerList";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

export default async function CareerPage() {
  const careerList: dynamicObject = await getCareers();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 rounded-lg -right-24 blob blob-rounded"></div>
      <div className="absolute bottom-0 rounded-lg -left-24 blob blob-rounded"></div>
      <CustomWidthWrapper className="relative py-12">
        <div className="min-h-[60vh]">
          <h1>Career opportunities</h1>
          <p className="pb-12 font-medium text-gray-600 border-b border-gray-200">
            We are always looking for passionate people to join our team. Feel
            free to contact us even if you don&apos;t see an opening.
          </p>
          <CareerList careerList={careerList.careers as CareerModel[]} />
        </div>
      </CustomWidthWrapper>
    </div>
  );
}
