import TaskFormClientState from "@/components/TaskFormClientState";

const TaskDetail = ({params}) => {
  const {id} = params;

  return (
    <div>
      <div className="max-w-6xl mx-auto items-start form-control">
        <h2 className="text-6xl">TaskDetail</h2>
        <p>{id}</p>
      </div>
      <TaskFormClientState className="mt-8 mb-8" id={id}/>
    </div>
  );
};

export default TaskDetail
