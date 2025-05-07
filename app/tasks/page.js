import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const tasksPage = () => {
  return (
    <div className="max-w-lg ml-10">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default tasksPage;
 