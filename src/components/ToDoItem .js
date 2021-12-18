import React from "react";
import { FaTimes } from "react-icons/fa";

import "./ToDoItem.css";

const ToDoItem = (props) => {
    const deleteHandler=()=>{
        props.onDelete(props.id);
    }
  return (
    <div className="Items">
      <li className="goal-item">{props.children}<p style={{color:'black'}}>{props.Desc}</p></li>
      <button onClick={deleteHandler}>
        <FaTimes />
      </button>
    </div>
  );
};
export default ToDoItem;