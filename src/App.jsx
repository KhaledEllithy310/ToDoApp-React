import { useState } from "react";
import "./App.css";
import InputForm from "./component/InputForm/InputForm";
import ToDoList from "./component/ToDoList/ToDoList";
import { Container } from "react-bootstrap";

function App() {
  //state for todo array
  const [toDoList, setToDoList] = useState([]);
  //state for catch todo from child to parent
  const [toDo, setToDo] = useState("");

  //function to add todo
  function addTask() {
    // e.preventDefault()
    console.log(toDo);
    if (toDo !== "") {
      let id = toDoList.length ? toDoList[toDoList.length - 1]?.id + 1 : 1;
      //store todo in todo list
      setToDoList([...toDoList, { id, name: toDo }]);
      setToDo("");
    } else {
      alert("please enter task");
    }
  }

  //function to catch todo from child to parent and store it in state
  function onGetValue(value) {
    setToDo(value);
  }

  function onRemove(taskId) {
    console.log(taskId);
    setToDoList(toDoList.filter((task) => task.id !== taskId));
  }

  function removeAll() {
    setToDoList([]);
  }

  return (
    <Container className="text-center mt-5 bg-dark p-3 w-50 text-light rounded">
      <InputForm addTask={addTask} onGetValue={onGetValue} />
      <ToDoList details={toDoList} onRemove={onRemove} removeAll={removeAll} />
    </Container>
  );
}

export default App;
