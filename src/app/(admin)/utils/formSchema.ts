import { z } from "zod";

export const UserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().optional(),
  role: z.enum(["admin", "content-writer"]),
});
export type UserSchemaType = z.infer<typeof UserSchema>;

export const TeamMemberSchema = z.object({
  name: z.string(),
  position: z.string(),
  imageUrl: z.string(),
  team: z.enum(["Core", "Members"]),
});
export type TeamMemberSchemaType = z.infer<typeof TeamMemberSchema>;

export const CareerSchema = z.object({
  title: z.string(),
  salary: z.string(),
  description: z.string(),
  time: z.string().optional(),
  experience: z.string().optional(),
  location: z.enum(["Remote", "On-site", "Hybrid"]),
  type: z.enum(["Full Time", "Part Time", "Internship"]),
  status: z.enum(["published", "draft", "archieved"]).optional(),
});
export type CareerSchemaType = z.infer<typeof CareerSchema>;