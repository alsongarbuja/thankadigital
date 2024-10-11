export const dataToSchemaParser = (schema: string[], data: dynamicObject) => {
  const result: dynamicObject = {};
  schema.forEach((key) => {
    if (key.includes(":")) {
      const [mainKey, ...innerKeys] = key.split(":");
      const innerData = innerKeys.reduce((acc: dynamicObject, curr) => {
        acc[curr] = data[curr];
        return acc;
      }, {});
      result[mainKey] = innerData;
    } else if (key.includes("|")) {
      const actualKey = key.split("|")[0];
      result[actualKey] = JSON.parse(data[actualKey] as string);
    } else {
      result[key] = data[key];
    }
  });
  return result;
}

export const schemaToDataParser = (data: dynamicObject, ignoreList: string[] = []) => {
  const result: dynamicObject = {};
  const dataKeys = Object.keys(data);
  dataKeys.forEach((key) => {
    if (ignoreList.includes(key)) return;
    if (typeof data[key] === "object") {
      const innerKeys = Object.keys(data[key] as dynamicObject);
      innerKeys.forEach((innerKey) => {
        result[innerKey] = (data[key] as dynamicObject)[innerKey];
      })
    } else {
      result[key] = data[key];
    }
  })
  return result;
};
