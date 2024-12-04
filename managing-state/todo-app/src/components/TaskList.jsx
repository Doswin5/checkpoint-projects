import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";

const TaskList = ({ tasks, updateTask, deleteTask }) => {
  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          {editingTask && editingTask.id === task.id ? (
            <TaskForm
              currentTask={task}
              onUpdate={(updatedTask) => {
                updateTask(updatedTask);
                setEditingTask(null);
              }}
            />
          ) : (
            <TaskItem
              task={task}
              onUpdate={updateTask}
              onDelete={deleteTask}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
