import { getCareers } from "@/server/controllers/career.controller";
import CareerList from "./careerList";

const CareerPage = async () => {
  const careerList: CareerModel[] = await getCareers();

  return (
    <>
      <h3>Career opportunities</h3>
      <p className="font-medium text-gray-500">Find about the career opportunities at thanka digital</p>
      <CareerList careerList={careerList} />
    </>
  )
}

export default CareerPage