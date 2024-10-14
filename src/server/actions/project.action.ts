"use server";
import { revalidatePath } from "next/cache";

import { IProjectScheme } from "../models/project.model";
import { createProject, deleteProjectById, updateProjectById } from "../controllers/project.controller";

export const addProjectAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  if (data.role === "superadmin") {
    return { message: "Not authorized to do so", isOk: false };
  }

  try {
    await createProject(data as unknown as IProjectScheme);
    revalidatePath("/admin/projects");
    revalidatePath("/work");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Project added successfully", isOk: true };
}

export const updateProjectAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  if (data.role === "superadmin") {
    return { message: "Not authorized to do so", isOk: false };
  }
  const projectId = data.id as string;
  delete data.id;
  try {
    await updateProjectById(projectId, data);
    revalidatePath("/admin/projects");
    revalidatePath("/work");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Project updated successfully", isOk: true };
}

export const deleteProjectAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  if (data.role === "superadmin") {
    return { message: "Not authorized to do so", isOk: false };
  }
  try {
    await deleteProjectById(data.id as string);
    revalidatePath("/admin/projects");
    revalidatePath("/work");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Project deleted successfully", isOk: true };
}
