import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <h1>What's the plan for today?</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default App;
