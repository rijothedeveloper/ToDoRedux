import React from "react";
import { useDispatch } from "react-redux";
import { TodoAdd } from "./TodoAdd";
import Todolist from "./Todolist";

const Todo = () => {
  const dispatch = useDispatch();
  const addTodo = (todo) => {
    dispatch({ type: "add", payload: todo });
  };
  return (
    <div>
      <Todolist />
      <TodoAdd onAdd={addTodo} />
    </div>
  );
};

export default Todo;
