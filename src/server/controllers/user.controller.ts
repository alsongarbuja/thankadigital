import mongoose from "mongoose";
import dbConnect from "..";
import userModel from "@/server/models/user.model";
import { removePrivateProperty } from "../helpers/privateProperty";
import { ApiError } from "@/server/helpers/ApiError";

export const getUsers = async () => {
  await dbConnect();
  const users = await userModel.find({ });

  return {
    users: users.map(user => removePrivateProperty(user)),
  };
}

export const getUserById = async (userId: string, getSchema: boolean = false) => {
  await dbConnect();
  const user = await userModel.findById(new mongoose.Types.ObjectId(userId));

  if (!user) {
    throw new ApiError("User not found", 404);
  }

  return getSchema ? user : removePrivateProperty(user);
}

export const getUserByEmail = async (email: string) => {
  await dbConnect();
  const user = await userModel.findOne({ email });

  if (!user) {
    throw new ApiError("User not found", 404);
  }

  return removePrivateProperty(user);
}

export const updateUserById = async (userId: string, data: any) => {
  const user = await getUserById(userId, true);
  Object.assign(user, data);
  await user.save();

  return removePrivateProperty(user);
}

export const deleteUserById = async (userId: string) => {
  const user = await getUserById(userId, true);
  if(user.role === "superadmin") {
    throw new ApiError("You can't delete superadmin", 403);
  }
  await user.deleteOne();

  return "DELETED";
}