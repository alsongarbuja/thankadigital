import dbConnect from "..";
import { ApiError } from "@/server/helpers/ApiError";
import teamsModel from "../models/teams.model";

export async function createTeam(body: dynamicObject) {
  await dbConnect();
  const team = await teamsModel.create(body);

  if (!team) {
    throw new ApiError("Team could not be created", 500);
  }

  return team;
}

export async function getTeam(id: string) {
  await dbConnect();
  const team = await teamsModel.findById(id);

  if (!team) {
    throw new ApiError("Team not found", 404);
  }

  return team;
}

export async function getTeams(teamType: string = "all") {
  await dbConnect();
  const teams = teamType === "all" ? await teamsModel.find() : await teamsModel.find({ team: teamType });

  if (!teams) {
    throw new ApiError("Teams not found", 404);
  }

  return teams;
}

export async function updateTeam(id: string, body: dynamicObject) {
  await dbConnect();
  const team = await getTeam(id);
  Object.assign(team, body);
  await team.save();
  return team;
}

export async function deleteTeam(id: string) {
  await dbConnect();
  const team = await getTeam(id);
  await team.deleteOne();
  return "DELETED";
}