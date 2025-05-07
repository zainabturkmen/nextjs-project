import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";

const tasksPage = () => {
  return (
    <div className="max-w-lg">
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default tasksPage;
