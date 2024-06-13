"use client"
import { updateChecked } from "@/utils/actions";

const CompleteTask = ({id, completed}) => {
  return (
    <form>
      <input type="hidden" name="id" value={id} />
      <input
        type="checkbox"
        defaultChecked={completed}
        className="checkbox checkbox-success"
        onChange={() => updateChecked({id, checked: !completed})}
      />
    </form>
  )
}

export default CompleteTask