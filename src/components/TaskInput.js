function TaskInput({ task, setTask, addTask }) {
  return (
    <div className="input-group">

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

    </div>
  );
}

export default TaskInput;