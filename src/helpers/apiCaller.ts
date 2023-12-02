
export const apiCaller = async (
  url: string, 
  method: "POST" | "GET" | "PUT" | "PATCH" | "DELETE" = "GET", 
  expectedStatus: number = 200,
  paylaod?: dynamicObject,
  headers?: dynamicObject,
) => {
  const res = await fetch(url, {
    method,
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(paylaod),
  })
  const data = await res.json();
  if(res.status !== expectedStatus) {
    return {
      res,
      data,
      isGood: false,
    };
  }
  return {
    data,
    isGood: true,
  };
}