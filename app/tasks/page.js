import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import prisma from "@/utils/db";

const createTask = async ({newTask}) => {
  "use server"
  console.log(newTask);
  try {
    const result = await prisma.task.create({
    data: {
      content: {newTask},
    }
  });

  return result;
  } catch (error) {
    console.error(error);
    return {error: error.message};
  }
};
const TasksPage = () => {
  return (
    <div className="">
      <h1 className="text-6xl">Tasks</h1>
      <TaskForm className="mt-8 mb-8" createTask={createTask} />
      <TaskList />
    </div>
  )
}

export default TasksPage
