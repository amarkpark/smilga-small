import React from "react";
import { upsertTask, getTask } from "@/utils/actions";

const TaskForm = async ({id}) => {
  // console.log("TaskForm", id);

  const task = id ? await getTask({id}) : null;
  
  const labelText = id ? "Edit Task" : "Add Task";
  const buttonText = id ? "Update Task" : "Add Task";

  return (
    <form action={upsertTask}>
      <div className="max-w-6xl mx-auto items-start form-control mt-8 mb-8">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="completed" value={task?.completed || false} />
        <label className=" w-full max-w-xs">
          <div className="label">
            <span className="label-text">{labelText}</span>
          </div>
          <div className="join w-full max-w-xs">
            <input
              className="input input-bordered w-full max-w-xs join-item"
              defaultValue={task?.content || ""}
              id="taskContent"
              name="taskContent"
              required
              type="text"
            />
            <button className="btn btn-secondary join-item" type="submit">{buttonText}</button>
          </div>
        </label>
      </div>
    </form>
  )
}

export default TaskForm