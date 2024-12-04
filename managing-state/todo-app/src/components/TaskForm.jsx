import React, { useState } from "react";

const TaskForm = ({ addTask, currentTask = null, onUpdate }) => {
  const [name, setName] = useState(currentTask ? currentTask.name : "");
  const [description, setDescription] = useState(currentTask ? currentTask.description : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !description.trim()) {
      alert("Both fields are required.");
      return;
    }
    const newTask = {
      id: currentTask ? currentTask.id : Date.now(),
      name,
      description,
      completed: currentTask ? currentTask.completed : false,
    };
    if (currentTask) {
      onUpdate(newTask);
    } else {
      addTask(newTask);
    }
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">{currentTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
