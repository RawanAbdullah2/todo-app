import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ToDoInput = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");

  const [isValid, setIsValid] = useState(true);
  const titleInputChangeHandler = (event) => {
    if (
      event.target.value.trim().length > 0 &&
      event.target.value.trim().length < 125
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEnteredTitle(event.target.value);
  };

  const descInputChangeHandler = (event) => {
    setEnteredDesc(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredTitle.trim().length === 0) {
      setIsValid(false);
      return;
    }
    localStorage.setItem("ToDoTitle", enteredTitle);
    localStorage.setItem("TooDesc", enteredDesc);
    props.onAddGoal(enteredTitle, enteredDesc);
    setEnteredTitle(" ");
    setEnteredDesc(" ");
  };
  return (
    <div>
      <label>Course Goal Title:</label>

      <div>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleInputChangeHandler}
        /><br/>
        <label>Description:</label>
        <br/>

        <input
          type="text"
          value={enteredDesc}
          onChange={descInputChangeHandler}
        />
        <button type="submit" onClick={formSubmitHandler}>
          <FaCheck />
        </button>
        {!isValid && <p>The title must be less than 125 characters</p>}
      </div>
    </div>
  );
};
export default ToDoInput;
