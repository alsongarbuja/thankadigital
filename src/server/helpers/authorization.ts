import { NextRequest } from "next/server";
import { getUserByEmail } from "../controllers/user.controller";
import { ApiError } from "./ApiError";

export const authorizeEmail = async (req: NextRequest, roles: string[] = ["superadmin"]) => {
  const authorizedEmail = req.headers.get("authorization")?.split(" ")[1];
  if (!authorizedEmail) {
    throw new ApiError("No authorized email sent", 401);
  }
  const user = await getUserByEmail(authorizedEmail);

  if (!user || !roles.includes(user.role)) {
    throw new ApiError("Not authorized to do the action", 401);
  }
}