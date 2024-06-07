"use client"
import React from "react";
// import prisma from "@/utils/db";

// const prismaHandlers = async () => {

//   await prisma.task.create({
//     data: {
//       content: "New Task",
//     }
//   })

//   const allTasks = await prisma.task.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return allTasks;
// }

const TaskForm = ({createTask}) => {
  return (
    <form action={createTask}>
      <div className="max-w-6xl mx-auto items-start form-control mt-8 mb-8">
        <label className=" w-full max-w-xs">
          <div className="label">
            <span className="label-text">Task to Add</span>
          </div>
          <div className="join w-full max-w-xs">
            <input type="text" className="input input-bordered w-full max-w-xs join-item" />
            <button className="btn btn-secondary join-item" type="submit">Add Task</button>
          </div>
        </label>
        {/* <input className="input input-bordered join-item" placeholder="New Task"/>
        <button className="btn join-item" type="submit">Add Task</button> */}
      </div>
    </form>
  )
}

export default TaskForm