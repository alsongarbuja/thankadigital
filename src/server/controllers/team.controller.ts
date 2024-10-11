import dbConnect from "..";
import { ApiError } from "@/server/helpers/ApiError";
import teamsModel, { ITeamScheme } from "../models/teams.model";
import { removePrivateProperty } from "../helpers/privateProperty";

export async function createTeam(body: ITeamScheme) {
  await dbConnect();
  const team = await teamsModel.create(body);

  if (!team) {
    throw new ApiError("Team could not be created", 500);
  }

  return removePrivateProperty(team);
}

export async function getTeamById(id: string, getSchema: boolean = false) {
  await dbConnect();
  const team = await teamsModel.findById(id);

  if (!team) {
    throw new ApiError("Team not found", 404);
  }

  return getSchema ? team : removePrivateProperty(team);
}

export async function getTeams(teamType: string = "all") {
  await dbConnect();
  const teams = teamType === "all" ? await teamsModel.find() : await teamsModel.find({ team: teamType });

  if (!teams) {
    throw new ApiError("Teams not found", 404);
  }

  return {
    teams: teams.map(team => removePrivateProperty(team)),
  };
}

export async function updateTeamById(id: string, body: dynamicObject) {
  await dbConnect();
  const team = await getTeamById(id, true);
  Object.assign(team, body);
  await team.save();
  return removePrivateProperty(team);
}

export async function deleteTeamById(id: string) {
  await dbConnect();
  const team = await getTeamById(id, true);
  await team.deleteOne();
  return "DELETED";
}
