import db from "@/utils/db";
import { request } from "http";

export const GET = async (request) => {
  const tasks = await db.task.findMany(); 
  return Response.json({ data: tasks });
};
