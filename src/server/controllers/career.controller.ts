import dbConnect from "..";
import { ApiError } from "@/server/helpers/ApiError";
import careerModel from "@/server/models/career.model";
import { removePrivateProperty } from "../helpers/privateProperty";

export async function createCareer(body: dynamicObject) {
  await dbConnect();
  const career = await careerModel.create(body);

  if (!career) {
    throw new ApiError("Career could not be created", 500);
  }

  return removePrivateProperty(career);
}

export async function getCareer(id: string, getSchema: boolean = false) {
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

export async function updateCareer(id: string, body: dynamicObject) {
  await dbConnect();
  const career = await getCareer(id, true);
  Object.assign(career, body);
  await career.save();
  return removePrivateProperty(career);
}

export async function deleteCareer(id: string) {
  await dbConnect();
  const career = await getCareer(id, true);
  await career.deleteOne();
  return "DELETED";
}