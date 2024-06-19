"use client"
import { upsertTaskWithDelay } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";

const initialState = {
  status: 100,
  message: null,
};

const TaskFormClientState = ({task}) => {
  const id = task?.id;
  console.log("TaskFormClientState", id);
  
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

  const [state, formAction] = useFormState(upsertTaskWithDelay, initialState);

  return (
    <form action={formAction}>
      <div className="max-w-6xl mx-auto items-start form-control mt-8 mb-8">
        <input type="hidden" name="id" value={id} />
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
        <p className="font-semibold">
          {state.status === 200 && <span className="text-success">{state.message}</span>}
          {state.status === 400 && <span className="text-error">{state.message}</span>}
          &nbsp;
        </p>
      </div>
    </form>
  )
}

export default TaskFormClientState