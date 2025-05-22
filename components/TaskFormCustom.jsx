"use client";
import { createTaskCustom } from "@/utils/actions";

const SubmitBtn = () => {
  return (
    <button type="submit" className="btn btn-primary join-item">
      Create Task
    </button>
  );
};

const TaskForm = () => {
  return (
    <form action={createTaskCustom}>
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
