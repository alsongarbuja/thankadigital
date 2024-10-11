"use server";

import { revalidatePath } from "next/cache";
import { createCareer, deleteCareerById, updateCareerById } from "../controllers/career.controller";
import { ICareerScheme } from "../models/career.model";

export const addCareerAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  try {
    await createCareer(data as unknown as ICareerScheme);
    revalidatePath("/admin/careers");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Career added successfully", isOk: true };
}

export const updateCareerAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const careerId = data.id as string;
  delete data.id;
  try {
    await updateCareerById(careerId, data);
    revalidatePath("/admin/careers");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Career updated successfully", isOk: true };
}

export const deleteCareerAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  if (data.role === "superadmin") {
    return { message: "Not authorized to do so", isOk: false };
  }
  try {
    await deleteCareerById(data.id as string);
    revalidatePath("/admin/careers");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Career deleted successfully", isOk: true };
}
