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
      <div className="join">
        {/* <label className="form-control w-full max-w-xs join-item">
          <div className="label">
            <span className="label-text">Task to Add</span>
          </div>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </label> */}
        <input className="input input-bordered join-item" placeholder="New Task"/>
        <button className="btn join-item" type="submit">Add Task</button>
      </div>
    </form>
  )
}

export default TaskForm