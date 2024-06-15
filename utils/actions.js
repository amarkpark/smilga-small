"use server"
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation"

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

export const upsertTaskWithDelay = async (formData) => {
  console.time("upsertDelay");
  await new Promise (resolve => setTimeout(resolve, 1000));
  console.timeEnd("upsertDelay");

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