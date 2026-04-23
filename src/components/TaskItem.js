function TaskItem({ task, index, toggleTask, deleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(index)}
      />

      <span className={task.completed ? "completed" : ""}>
        {task.text}
      </span>

      <button onClick={() => deleteTask(index)}>
        X
      </button>
    </li>
  );
}

export default TaskItem;