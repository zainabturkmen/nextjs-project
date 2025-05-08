const TaskForm = () => {
  return (
    <form className="join w-full">
      <input
        type="text"
        className="input input-bordered join-item w-full"
        placeholder="type here"
        name="content"
        required
      ></input>
    </form>
  );
};

export default TaskForm;
