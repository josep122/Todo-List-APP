import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./TodoForm.css";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return;
    }
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setText("");
  };

  return (
    <form className="addTodoForm" onSubmit={handleSubmit}>
      <input
        className="input-awal"
        type="text"
        placeholder="Enter a new todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="addTodoButton" type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
