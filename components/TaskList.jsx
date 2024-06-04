import React from "react"
import prisma from "@/utils/db";

const TaskList = async () => {
  const tasks = await prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  if (tasks.length === 0) {
    return <h2 className="max-w-6xl mx-auto items-start form-control">Please add a task</h2>
  }
  
  return (
    <div>
      <div className="max-w-6xl mx-auto items-start form-control">
        {tasks.map((task) => (
          <label className="cursor-pointer label">
            <input type="checkbox" checked={task.completed} className="checkbox checkbox-success" />
            <span className="mx-8 label-text">{task.content}</span>
          </label>
        ))}
      </div>
      <br />
      <hr />
      <div className="mockup-code">
        {tasks.map((task) => (
          <pre><code>{JSON.stringify(task)}</code></pre>
        ))}
      </div>
    </div>
  )
}

export default TaskList
