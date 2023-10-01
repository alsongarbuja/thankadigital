export const getCareerList = async (): Promise<CareerModel[]> => {
  const careers = await fetch('https://api.sheety.co/2c6a673dad5828c32980a768a9560ca3/careerOpportunitiesThankaDigital/careers', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Basic ${process.env.SHEETY_API_AUTHORIZATION}`
    }
  })
  const careersJson = await careers.json();
  const actualCareerList = careersJson.careers.map((c: dynamicObject) => ({
    ...c,
    skills: c.skills.split(',').map(s => s.trim())
  }));
  return actualCareerList as CareerModel[];
}