"use server"
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData) => {
  const newTask = formData.get("newTask");
  console.log("new task const", newTask);

  try {
    const result = await prisma.task.create({
    data: {
      content: newTask,
    }
  });

  console.log(formData);

  return result;
  } catch (error) {
    console.error(error);
    return {error: error.message};
  } finally {
    revalidatePath("/tasks");
  }
};

export const deleteTask = async (formData) => {
  const id = formData.get("id");
  console.log("id to delete", id);

  try {
    const result = await prisma.task.delete({
      where: {
        id: id,
      },
  });

  return result;
  } catch (error) {
    console.error(error);
    return {error: error.message};
  } finally {
    revalidatePath("/tasks");
  }
};