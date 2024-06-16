import {  getTask } from "@/utils/actions";
import TaskFormClientState from "@/components/TaskFormClientState";

const TaskDetail = async ({params}) => {
  const {id} = params;
  const task = await getTask({id});

  return (
    <div>
      <div className="max-w-6xl mx-auto items-start form-control">
        <h2 className="text-6xl">TaskDetail</h2>
        <p>{id}</p>
      </div>
      <TaskFormClientState className="mt-8 mb-8" task={task}/>
    </div>
  );
};

export default TaskDetail
