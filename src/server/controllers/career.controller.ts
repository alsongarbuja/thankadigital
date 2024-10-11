import dbConnect from "..";
import { ApiError } from "@/server/helpers/ApiError";
import careerModel, { ICareerScheme } from "@/server/models/career.model";
import { removePrivateProperty } from "../helpers/privateProperty";

export async function createCareer(body: ICareerScheme) {
  await dbConnect();
  const career = await careerModel.create(body);

  if (!career) {
    throw new ApiError("Career could not be created", 500);
  }

  return removePrivateProperty(career);
}

export async function getCareerById(id: string, getSchema: boolean = false) {
  await dbConnect();
  const career = await careerModel.findById(id);

  if (!career) {
    throw new ApiError("Career not found", 404);
  }

  return getSchema ? career : removePrivateProperty(career);
}

export async function getCareers(status: string = "published") {
  await dbConnect();
  const careers = status === "all" ? await careerModel.find() : await careerModel.find({ status: "published" });

  if (!careers) {
    throw new ApiError("Careers not found", 404);
  }

  return {
    careers: careers.map((career) => removePrivateProperty(career)),
  };
}

export async function updateCareerById(id: string, body: dynamicObject) {
  await dbConnect();
  const career = await getCareerById(id, true);
  Object.assign(career, body);
  await career.save();
  return removePrivateProperty(career);
}

export async function deleteCareerById(id: string) {
  await dbConnect();
  const career = await getCareerById(id, true);
  await career.deleteOne();
  return "DELETED";
}
