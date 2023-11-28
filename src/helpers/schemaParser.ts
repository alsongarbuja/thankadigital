export const schemaParser = (schema: string[], data: dynamicObject) => {
  const result: dynamicObject = {};
  schema.forEach((key) => {
    if(key.includes(":")) {
      const [mainKey, ...innerKeys] = key.split(":");
      const innerData = innerKeys.reduce((acc: dynamicObject, curr) => {
        acc[curr] = data[curr];
        return acc;
      }, {});
      result[mainKey] = innerData;
    } else if(key.includes("|")) {
      const actualKey = key.split("|")[0];
      result[actualKey] = JSON.parse(data[actualKey]);
    } else {
      result[key] = data[key];
    }
  });
  return result;
}