import TaskForm from "@/components/TaskForm";
import TaskFormCustom from "@/components/TaskFormCustom";
import TaskList from "@/components/TaskList";
export const dynamic = "force-dynamic"


const tasksPage = () => {
  return (
    <div className="max-w-lg ml-10">
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default tasksPage;
 