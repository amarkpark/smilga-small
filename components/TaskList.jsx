import React from "react"
import Link from "next/link";
import { getAllTasks, updateChecked } from "@/utils/actions";
import DeleteForm from "./DeleteForm";
import CompleteTaskForm from "./CompleteTaskForm";

const TaskList = async () => {
  const tasks = await getAllTasks();


  if (tasks.length === 0) {
    return <h2 className="max-w-6xl mx-auto items-start form-control">Please add a task</h2>
  }
  
  return (
    <div>
      <div className="max-w-6xl mx-auto items-start form-control">
        {tasks.map((task) => (
          <label className="cursor-pointer label" key={task.id}>
            <CompleteTaskForm id={task.id} completed={task.completed} />
            <span className="mx-8 label-text text-xl">{task.content}</span>
            <Link
              href={`/tasks/${task.id}`}
              id={`editTask-${task.id}`}
              name={`editTask-${task.id}`}
              className="btn btn-link"
            >
              Edit
            </Link>
            <DeleteForm id={task.id} />
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
