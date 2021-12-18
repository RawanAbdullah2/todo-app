import React from "react";
import ToDoItem from "./ToDoItem ";
const ToDoList = (props) => {
  return (
    <ul className="goal-list">

      {props.items.map((todo) => (
        <ToDoItem key={todo.id} id={todo.id} Desc={todo.Desc} onDelete={props.onDeleteItem}>
          {todo.title}
        </ToDoItem>
      ))}
    </ul>
  );
};

export default ToDoList;