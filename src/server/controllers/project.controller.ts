import dbConnect from "..";
import { ApiError } from "@/server/helpers/ApiError";
import projectModel, { IProjectScheme } from "@/server/models/project.model";
import { removePrivateProperty } from "../helpers/privateProperty";

export async function createProject(body: IProjectScheme) {
  await dbConnect();
  const project = await projectModel.create(body);

  if (!project) {
    throw new ApiError("Project could not be created", 500);
  }

  return removePrivateProperty(project);
}

export async function getProjectById(id: string, getSchema: boolean = false) {
  await dbConnect();
  const project = await projectModel.findById(id);

  if (!project) {
    throw new ApiError("Project not found", 404);
  }

  return getSchema ? project : removePrivateProperty(project);
}

export async function getProjects(status: string = "published") {
  await dbConnect();
  const projects = status === "all" ? await projectModel.find() : await projectModel.find({ status: "published" });

  if (!projects) {
    throw new ApiError("Projects not found", 404);
  }

  return {
    projects: projects.map((project) => removePrivateProperty(project)),
  };
}

export async function getProjectBySlug(slug: string) {
  await dbConnect();
  const project = await projectModel.findOne({ slug });

  if (!project) {
    throw new ApiError("Project not found", 404);
  }

  return removePrivateProperty(project);
}

export async function updateProjectById(id: string, body: dynamicObject) {
  await dbConnect();
  const project = await getProjectById(id, true);
  Object.assign(project, body);
  await project.save();
  return removePrivateProperty(project);
}

export async function deleteProjectById(id: string) {
  await dbConnect();
  const project = await getProjectById(id, true);
  await project.deleteOne();
  return "DELETED";
}
