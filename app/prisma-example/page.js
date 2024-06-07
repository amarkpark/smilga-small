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

// const allTasks = () => {
//   return prisma.task.findMany({
//     orderBy: {
//       createdAt: "desc",
//     },
//   })
// };

const createTask = async ({newTask}) => {
  "use server"
  console.log(newTask);
  await prisma.task.create({
    data: {
      content: {newTask},
    }
  })
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