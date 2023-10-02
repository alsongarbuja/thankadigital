import CareerList from "./careerList";
import { getCareerList } from "@/utils/careers";

const CareerPage = async () => {
  const careerList = await getCareerList();

  return (
    <main className="max-w-[90%] min-h-[50vh] mx-auto">
      <h3>Career opportunities</h3>
      <p className="font-medium text-gray-500">Find about the career opportunities at thanka digital</p>
      <CareerList careerList={careerList} />
    </main>
  )
}

export default CareerPage