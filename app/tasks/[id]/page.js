import React from 'react'
import prisma from "@/utils/db";

const TaskDetail = ({params}) => {
  const {id} = params;

  // const getTask = async () => {
  //   "use server"
  //   const task = await prisma.task.findUnique({
  //     where: {
  //       id: id,
  //     },
  //   });
    

  //   console.log("here is your task response", task);
  //   return task.entries();
  // };

  return (
    <div>
      <div className="max-w-6xl mx-auto items-start form-control">
        <h2 className="text-6xl">TaskDetail</h2>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default TaskDetail
