export const removePrivateProperty = (obj: dynamicObject) => {
  const newObj: dynamicObject = { id: obj._id.toString(), ...obj._doc };
  delete newObj._id;
  delete newObj.password;
  delete newObj.__v;
  return newObj;
}