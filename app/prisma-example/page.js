import prisma from "@/utils/db";

const prismaHandlers = async () => {
  await prisma.task.create({
    data: {
      content: "Wake Up",
    }
  })

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return allTasks;
}
const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  return (
    <div className="">
      <h1 className="text-6xl">PrismaExamplePage</h1>
      <hr />
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

export default PrismaExamplePage