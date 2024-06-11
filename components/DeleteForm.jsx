import { deleteTask } from "@/utils/actions";

const DeleteForm = ({id}) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button
        id={`deleteTask-${id}`}
        name={`deleteTask-${id}`}
        className="btn btn-link"
      >
        Delete
      </button>
    </form>
  )
}

export default DeleteForm