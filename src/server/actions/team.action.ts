"use server";

import { revalidatePath } from "next/cache";
import { createTeam, deleteTeamById, updateTeamById } from "../controllers/team.controller";
import { ITeamScheme } from "../models/teams.model";

export const addTeamAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  try {
    await createTeam(data as unknown as ITeamScheme);
    revalidatePath("/admin/teams");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Team added successfully", isOk: true };
}

export const updateTeamAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const teamId = data.id as string;
  delete data.id;
  try {
    await updateTeamById(teamId, data);
    revalidatePath("/admin/teams");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Team updated successfully", isOk: true };
}

export const deleteTeamAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  if (data.role === "superadmin") {
    return { message: "Not authorized to do so", isOk: false };
  }
  try {
    await deleteTeamById(data.id as string);
    revalidatePath("/admin/teams");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "Team deleted successfully", isOk: true };
}
