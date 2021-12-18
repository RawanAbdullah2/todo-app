import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoInput from "./ToDoInput";

const ToDo = () => {
  const [toDoList, setToDoList] = useState([]);

  const addGoalHandler = (enteredText, enteredDesc) => {
    setToDoList((prevGoals) => {
      const updatedGoals = [
        ...prevGoals,
        { title: enteredText, Desc: enteredDesc,id: Math.random().toString() },
      ];
      return updatedGoals;
    });
  };

  const deleteItemHandler=(goalId)=>{
    setToDoList(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  return (
    <div>
      <ToDoInput onAddGoal={addGoalHandler}></ToDoInput>

      <ToDoList items={toDoList} onDeleteItem={deleteItemHandler} />

    </div>
  );
};

export default ToDo;
