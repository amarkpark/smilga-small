import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const TasksPage = () => {
  return (
    <div className="">
      <h1 className="text-6xl">Tasks</h1>
      <TaskForm className="mt-8 mb-8" />
      <TaskList />
    </div>
  )
}

export default TasksPage
