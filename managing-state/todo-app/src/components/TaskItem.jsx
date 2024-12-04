import React from "react";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const toggleComplete = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  return (
    <div
      style={{
        textDecoration: task.completed ? "line-through" : "none",
        background: task.completed ? "#d4edda" : "#fff3cd",
        margin: "10px 0",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>{task.name}</h3>
      <p>{task.description}</p>
      <button onClick={toggleComplete}>
        {task.completed ? "Mark as Incomplete" : "Mark as Complete"}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
