import CareerForm from "../../_components/CareerForm";
import { getCareerById } from "@/server/controllers/career.controller";

export default async function EditCareer({
  params,
}: {
  params: { careerId: string };
}) {
  const career = await getCareerById(params.careerId);

  return <CareerForm data={career} isEdit />;
}
