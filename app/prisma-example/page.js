import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import prisma from "@/utils/db";

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

const allTasks = () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  })
};

const getTask = async () => {
  const task = await prisma.task.findUnique({
    where: {
      id: id,
    },
  });

  return task;
};

const createTask = async ({taskContent}) => {
  "use server"
  console.log(taskContent);
  try {
    const result = await prisma.task.create({
    data: {
      content: {taskContent},
    }
  });

  return result;
  } catch (error) {
    console.error(error);
    return {error: error.message};
  }
};
const deleteTask = async ({taskContent}) => {
  "use server"
  console.log(taskContent);
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

const PrismaExamplePage = async () => {
  // const tasks = await allTasks();
  return (
    <div className="">
      <h1 className="text-6xl">PrismaExamplePage</h1>
      <TaskForm className="mt-8 mb-8" createTask={createTask}></TaskForm>
      <TaskList></TaskList>
    </div>
  )
}

export default PrismaExamplePage