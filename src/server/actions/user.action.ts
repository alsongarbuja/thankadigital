"use server";

import { revalidatePath } from "next/cache";
import { createUser, deleteUserById, updateUserById } from "../controllers/user.controller";
import { IUserScheme } from "../models/user.model";

export const addUserAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());

  try {
    await createUser(data as unknown as IUserScheme);
    revalidatePath("/admin/users");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "User added successfully", isOk: true };
}

export const updateUserAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  const userId = data.id as string;
  delete data.id;
  if (data.password === "") {
    delete data.password;
  }
  if (data.role === "superadmin") {
    return { message: "Not authorized to do so", isOk: false };
  }
  try {
    await updateUserById(userId, data);
    revalidatePath("/admin/users");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "User updated successfully", isOk: true };
}

export const deleteUserAction = async (prevState: IActionState, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  if (data.role === "superadmin") {
    return { message: "Not authorized to do so", isOk: false };
  }
  try {
    await deleteUserById(data.id as string);
    revalidatePath("/admin/users");
  } catch (error) {
    return { message: (error as Error).message, isOk: false };
  }
  return { message: "User deleted successfully", isOk: true };
}
