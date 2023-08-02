/* eslint-disable react/prop-types */
import { useState } from "react";
import './InputForm.css'
const InputForm = ({ onGetValue, addTask }) => {
  //store the value of input in state
  const [inputValue, setInputValue] = useState("");
  //get value of input
  function getValue(e) {
    //store input value in state
    setInputValue(e.target.value);
    //send input value to parent
    if (inputValue) {
      onGetValue(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    //add task to task list
    addTask();
    // Reset the input value
    setInputValue(" ");
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="p-2">Task Name</label>
        <input
          className="m-2"
          type="text"
          value={inputValue}
          onChange={getValue}
        />
        {/* <Button className="btn btn-outline-info" type="submit">
          Add Task
        </Button> */}
        <button className="btn btn-outline-info" type="submit" > Add Task</button>
      </form>
    </div>
  );
};

export default InputForm;
