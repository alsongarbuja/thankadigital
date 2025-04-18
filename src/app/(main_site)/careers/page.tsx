import { Metadata } from "next";

import CareerList from "./careerList";
import { getCareers } from "@/server/controllers/career.controller";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "We are always looking for passionate people to join our team. Look at the current openings and apply now.",
};

export default async function CareerPage() {
  const careerList: dynamicObject = await getCareers();

  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 rounded-lg -right-24 blob blob-rounded"></div>
      <div className="absolute bottom-0 rounded-lg -left-24 blob blob-rounded"></div>
      <CustomWidthWrapper className="relative py-12">
        <div className="min-h-[60vh]">
          <h1>Career opportunities</h1>
          <p className="pb-12 text-gray-600 border-b border-gray-200">
            We are always looking for passionate people to join our team. Feel
            free to contact us even if you don&apos;t see an opening.
          </p>
          <CareerList careerList={careerList.careers as CareerModel[]} />
        </div>
      </CustomWidthWrapper>
    </div>
  );
}
