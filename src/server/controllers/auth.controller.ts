import jwt from "jsonwebtoken";
import moment from "moment";

import userModel from "@/server/models/user.model";
import dbConnect from "..";
import { ApiError } from "@/server/helpers/ApiError";
import tokenModel from "../models/token.model";
import { removePrivateProperty } from "../helpers/privateProperty";

export const register = async (user: { name: string; email: string; password: string; }) => {
  await dbConnect();
  const oldUser = await userModel.findOne({ email: user.email });

  if (oldUser) {
    throw new ApiError("Email already taken", 400);
  }

  const newUser = await userModel.create(user);
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  });
  await tokenModel.create({ accessToken: token, user: newUser._id, expires: moment().add(30, 'days') });

  return {
    user: removePrivateProperty(newUser),
    token,
  };
}

export const login = async (email: string, password: string) => {
  await dbConnect();
  const user = await userModel.findOne({ email });  

  if (!user) {
    throw new ApiError("User not found", 404);
  }

  const isMatch = await user.isPasswordVerified(password);

  if (!isMatch) {
    throw new ApiError("Incorrect password", 401);
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  });
  await tokenModel.create({ accessToken: token, user: user._id, expires: moment().add(30, 'days') });

  return {
    user: removePrivateProperty(user),
    token,
  };
}

export const logout = async (token: string) => {
  await dbConnect();
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
  if (!decoded) {
    throw new ApiError("Invalid token", 401);
  }
  await tokenModel.deleteOne({ accessToken: token, user: decoded.id });
  return true;
}

export const checkToken = async (token: string) => {
  await dbConnect();
  const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
  if (!decoded) {
    throw new ApiError("Invalid token", 401);
  }
  const user = await userModel.findById(decoded.id);
  if (!user) {
    throw new ApiError("User not found", 404);
  }
  const tokenDoc = await tokenModel.findOne({ accessToken: token, user: decoded.id });
  if (!tokenDoc) {
    throw new ApiError("Invalid token", 401);
  }
  return true;
}