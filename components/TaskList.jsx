import prisma from "@/utils/db";

const TaskList = async () => {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium">No Tasks to show...</h2>
  }
  return <div></div>;
};

export default TaskList;
