import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Debug React Apps", completed: true },
  ]);

  return (
    <div>
      <Header title="React Debugging App" />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
