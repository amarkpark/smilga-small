import React from "react";
import { createTask } from "@/utils/actions";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="max-w-6xl mx-auto items-start form-control mt-8 mb-8">
        <label className=" w-full max-w-xs">
          <div className="label">
            <span className="label-text">Task to Add</span>
          </div>
          <div className="join w-full max-w-xs">
            <input
              className="input input-bordered w-full max-w-xs join-item"
              id="newTask"
              name="newTask"
              required
              type="text"
            />
            <button className="btn btn-secondary join-item" type="submit">Add Task</button>
          </div>
        </label>
      </div>
    </form>
  )
}

export default TaskForm