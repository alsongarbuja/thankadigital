import type mongoose from "mongoose";

export const removePrivateProperty = (obj: dynamicObject) => {
  const newObj: dynamicObject = { id: (obj._id as mongoose.Types.ObjectId).toString(), ...(obj._doc as dynamicObject) };
  delete newObj._id;
  delete newObj.password;
  delete newObj.__v;
  return newObj;
}
