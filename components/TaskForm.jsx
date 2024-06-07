import React from "react";
import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

const TaskForm = () => {
  const createTask = async (formData) => {
    "use server"
    const newTask = formData.get("newTask");
    console.log("newTask", newTask);

    try {
      const result = await prisma.task.create({
      data: {
        content: newTask,
      }
    });

    return result;
    } catch (error) {
      console.error(error);
      return {error: error.message};
    } finally {
      revalidatePath("/tasks");
    }
  };

  return (
    <form action={createTask}>
      <div className="max-w-6xl mx-auto items-start form-control mt-8 mb-8">
        <label className=" w-full max-w-xs">
          <div className="label">
            <span className="label-text">Task to Add</span>
          </div>
          <div className="join w-full max-w-xs">
            <input
              type="text"
              id="newTask"
              name="newTask"
              className="input input-bordered w-full max-w-xs join-item"
              required
            />
            <button className="btn btn-secondary join-item" type="submit">Add Task</button>
          </div>
        </label>
      </div>
    </form>
  )
}

export default TaskForm