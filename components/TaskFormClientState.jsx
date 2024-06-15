"use client"
// @refresh reset 
import { upsertTaskWithDelay, getTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const TaskFormClientState = async ({id}) => {
  console.log("TaskFormClientState", id);

  const task = id ? await getTask({id}) : null;
  
  const labelText = id ? "Edit Task" : "Add Task";
  const buttonText = id ? "Update Task" : "Add Task";

  const SubmitButton = () => {
    console.log("SubmitButton");
    const { pending } = useFormStatus();
    console.log("pending", pending);
    return (
      <button className="btn btn-secondary join-item" type="submit" disabled={pending}>
        {pending ? "Saving..." : buttonText}
      </button>
    )
  }

  return (
    <form action={upsertTaskWithDelay}>
      <div className="max-w-6xl mx-auto items-start form-control mt-8 mb-8">
        <input type="hidden" name="id" value={id} />
        <input type="hidden" name="completed" value={task?.completed || false} />
        <label className=" w-full max-w-xs">
          <div className="label">
            <span className="label-text">{labelText}</span>
          </div>
          <div className="join w-full max-w-xs">
            <input
              className="input input-bordered w-full max-w-xs join-item"
              defaultValue={task?.content || ""}
              id="taskContent"
              name="taskContent"
              required
              type="text"
            />
            <SubmitButton />
          </div>
        </label>
      </div>
    </form>
  )
}

export default TaskFormClientState