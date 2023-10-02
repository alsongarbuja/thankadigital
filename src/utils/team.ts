export const getCoreTeam = async (): Promise<TeamModel[]> => {
  const res = await fetch("https://api.sheety.co/2c6a673dad5828c32980a768a9560ca3/thankaTeams/teams", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.SHEETY_API_TEAM_AUTHORIZATION}`
    }
  });
  const data = await res.json();

  return data.teams.filter((t: TeamModel) => t.teamCategory==="Owners");
}

type Teams = {
  coreTeams: TeamModel[];
  programmers: TeamModel[];
  testers: TeamModel[];
  marketers: TeamModel[];
  designers: TeamModel[];
  others: TeamModel[];
}

export const getTeams = async (): Promise<Teams> => {
  const res = await fetch("https://api.sheety.co/2c6a673dad5828c32980a768a9560ca3/thankaTeams/teams", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.SHEETY_API_TEAM_AUTHORIZATION}`
    }
  });
  const data = await res.json();
  const teams: Teams = {
    coreTeams: data.teams.filter((t: TeamModel) => t.teamCategory==="Owners"),
    programmers: data.teams.filter((t: TeamModel) => t.teamCategory==="Programmers"),
    designers: data.teams.filter((t: TeamModel) => t.teamCategory==="Designers"),
    marketers: data.teams.filter((t: TeamModel) => t.teamCategory==="Marketers"),
    testers: data.teams.filter((t: TeamModel) => t.teamCategory==="Testers"),
    others: data.teams.filter((t: TeamModel) => t.teamCategory==="Others"),
  }
  return teams;
}