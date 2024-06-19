"use server"
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"
import { z } from "zod";

export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const getTask = async ({id}) => {
  return await prisma.task.findUnique({
    where: {
      id: id,
    },
  });
};

export const createTask = async (formData) => {
  const taskContent = formData.get("taskContent");
  console.log("new task const", taskContent);

  try {
    const result = await prisma.task.create({
    data: {
      content: taskContent,
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

export const updateChecked = async ({id, checked}) => {
  try {
    const result = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        completed: checked,
      }
    });

    return result;
  } catch (error) {
    console.error(error);
    return {error: error.message};
  } finally {
    revalidatePath("/tasks");
  }
}

export const upsertTask = async (formData) => {
  const id = formData.get("id");
  console.log("id to upsert", id);
  const taskContent = formData.get("taskContent");
  console.log("task content", taskContent);

  if (id) {
    try {
      const result = await prisma.task.update({
        where: {
          id: id,
        },
        data: {
          content: taskContent,
        }
      });
  
      return result;
    } catch (error) {
      console.error(error);
      return {error: error.message};
    } finally {
      console.log("got to the Upsert finally");
      redirect("/tasks");
    }
  }

  try {
    const result = await prisma.task.create({
    data: {
      content: taskContent,
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

export const upsertTaskWithDelay = async (prevState, formData) => {
  // Delay allows us to visualize the button states
  console.time("upsertDelay");
  await new Promise (resolve => setTimeout(resolve, 500));
  console.timeEnd("upsertDelay");

  const id = formData.get("id");
  console.log("id to upsert", id);
  const taskContent = formData.get("taskContent");
  console.log("task content", taskContent);

  const Task = z.object({
    taskContent: z.string().min(3).max(256),
  });

  if (id) {
    let canReturnToTaskList = false;
    try {
      Task.parse({ taskContent });
      await prisma.task.update({
        where: {
          id: id,
        },
        data: {
          content: taskContent,
        }
      });
  
      canReturnToTaskList = true;
      return { status: 200, message: "success" };
    } catch (error) {
      console.error(error);
      return { status: 400, message: error.message };
    } finally {
      console.log("got to the Upsert Update finally");

      if (canReturnToTaskList) {
        // Need to find a way to add a delay to see Success message
        // OR pass state to redirect so displays in task list page
        redirect("/tasks"); 
      }
    }
  }

  try {
    Task.parse({ taskContent });
    await prisma.task.create({
    data: {
      content: taskContent,
    }
  });

  console.log(formData);

  return { status: 200, message: "success" };
  } catch (error) {
    console.error(error);
    return { status: 400, message: error.message };
  } finally {
    console.log("got to the Upsert Create finally");
    revalidatePath("/tasks");
  }
};