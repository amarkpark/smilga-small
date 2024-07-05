"use client"
import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const SubmitButton = ({id}) => {
  const {pending} = useFormStatus();

  console.log("pending", pending);
  return (
    <button
      id={`deleteTask-${id}`}
      name={`deleteTask-${id}`}
      className="btn btn-link"
      disabled={pending}
    >
      {pending ? "Pending..." : "Delete"}
    </button>
  )
}

const DeleteForm = ({id}) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton {...{id}}/>
    </form>
  )
}

export default DeleteForm