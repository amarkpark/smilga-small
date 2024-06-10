import React from "react"
import prisma from "@/utils/db";
import Link from "next/link";
import { getAllTasks } from "@/utils/actions";

const TaskList = async () => {
  const tasks = await getAllTasks();

  const deleteTask = async ({id}) => {
    "use server"
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
    }
  };

  if (tasks.length === 0) {
    return <h2 className="max-w-6xl mx-auto items-start form-control">Please add a task</h2>
  }
  
  return (
    <div>
      <div className="max-w-6xl mx-auto items-start form-control">
        {tasks.map((task) => (
          <label className="cursor-pointer label" key={task.id}>
            <input
              type="checkbox"
              defaultChecked={task.completed}
              className="checkbox checkbox-success"
            />
            <span className="mx-8 label-text text-xl">{task.content}</span>
            <Link
              href={`/tasks/${task.id}`}
              id={`editTask-${task.id}`}
              name={`editTask-${task.id}`}
              className="btn btn-link"
            >
              Edit
            </Link>
            <button
              id={`deleteTask-${task.id}`}
              name={`deleteTask-${task.id}`}
              className="btn btn-link"
            >
              Delete
            </button>
          </label>
        ))}
      </div>
      <br />
      <hr />
      <div className="mockup-code">
        {tasks.map((task) => (
          <pre key={task.id}><code>{JSON.stringify(task)}</code></pre>
        ))}
      </div>
    </div>
  )
}

export default TaskList
