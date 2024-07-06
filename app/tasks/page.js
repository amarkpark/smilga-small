// @refresh reset 
import TaskFormClientState from "@/components/TaskFormClientState";
import TaskList from "@/components/TaskList";

export const dynamic = "force-dynamic";

const TasksPage = () => {
  return (
    <div className="">
      <h1 className="text-6xl">Tasks</h1>
      <TaskFormClientState className="mt-8 mb-8" />
      <TaskList />
    </div>
  )
}

export default TasksPage
