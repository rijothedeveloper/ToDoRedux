import React from "react";
import { useSelector } from "react-redux";

const Todolist = () => {
  const todosRedux = useSelector((store) => store.todos);
  return (
    <>
      <ul>
        {todosRedux.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

Todolist.propTypes = {};

export default Todolist;
