import React from "react"

const TaskList = ({tasks}) => {
  return (
    <div>
      <div className="max-w-6xl mx-auto items-start form-control">
        {tasks.map((task) => (
          <label className="cursor-pointer label">
            <input type="checkbox" checked={task.completed} className="checkbox checkbox-success" />
            <span className="mx-8 label-text">{task.content}</span>
          </label>
        ))}
      </div>
      <br />
      <hr />
      <div className="mockup-code">
        {tasks.map((task) => (
          <pre><code>{JSON.stringify(task)}</code></pre>
        ))}
      </div>
    </div>
  )
}

export default TaskList
