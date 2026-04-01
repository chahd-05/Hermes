import TaskItem from "./TaskItem";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul>
      {tasks.map((t, index) => (
        <TaskItem
          key={index}
          task={t}
          index={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;