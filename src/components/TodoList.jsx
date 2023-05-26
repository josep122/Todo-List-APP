import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./TodoList.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("all");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleToggle = (id) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSubmit = () => {
    dispatch({ type: "EDIT_TODO", payload: { id: editId, text: editText } });
    setEditId(null);
    setEditText("");
  };

  const filteredTodos =
    filter === "all"
      ? todos
      : todos.filter((todo) => {
          if (filter === "active") {
            return !todo.completed;
          } else if (filter === "completed") {
            return todo.completed;
          }
          return false;
        });

  return (
    <div className="todo-list-container">
      <div className="todo-list-buttons">
        <button
          className="form-Button"
          onClick={() => handleFilterChange("all")}
        >
          All
        </button>
        <button
          className="form-Button"
          onClick={() => handleFilterChange("active")}
        >
          Active
        </button>
        <button
          className="form-Button"
          onClick={() => handleFilterChange("completed")}
        >
          Completed
        </button>
      </div>
      {filteredTodos.map((todo) => (
        <div key={todo.id} className="todo-list-item">
          {editId === todo.id ? (
            <div>
              <input type="text" value={editText} onChange={handleEditChange} />
              <button onClick={handleEditSubmit}>Save</button>
            </div>
          ) : (
            <div className="container-list">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggle(todo.id)}
              />
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
              <button className="delete" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
              <button
                className="edit"
                onClick={() => handleEdit(todo.id, todo.text)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
