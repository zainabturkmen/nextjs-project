"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (FormData) => {
  const content = formData.get("content");
  await prisma.task.create({
    data: {
      content,
    },
  });
  revalidatePath("/tasks");c
};
