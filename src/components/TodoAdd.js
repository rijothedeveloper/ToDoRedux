import React from "react";
import { useState } from "react";

export const TodoAdd = ({ onAdd }) => {
  const [todo, setTodo] = useState("");
  const handleTodoChange = (event) => {
    setTodo(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(todo);
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todo} onChange={handleTodoChange} />
      <button typr="submit">Add</button>
    </form>
  );
};
