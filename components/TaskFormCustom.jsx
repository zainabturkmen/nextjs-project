"use client";
import { useState, useTransition } from "react";
import { createTaskCustom } from "@/utils/actions";

const SubmitBtn = ({ pending }) => {
  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "please wait..." : "create Task"}
    </button>
  );
};

const TaskForm = () => {
  const [state, setState] = useState({ message: null });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    startTransition(async () => {
      const result = await createTaskCustom(formData);
      setState(result);
      e.target.reset(); // clear form if needed
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {state.message ? <p className="mb-2">{state.message}</p> : null}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn pending={isPending} />
      </div>
    </form>
  );
};

export default TaskForm;
