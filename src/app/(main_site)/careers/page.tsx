import { getCareers } from "@/server/controllers/career.controller";
import CareerList from "./careerList";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

export default async function CareerPage() {
  const careerList: CareerModel[] = await getCareers();

  return (
    <CustomWidthWrapper>
      <h3>Career opportunities</h3>
      <p className="font-medium text-gray-600">
        Find about the career opportunities at thanka digital
      </p>
      <CareerList careerList={careerList} />
    </CustomWidthWrapper>
  );
}
