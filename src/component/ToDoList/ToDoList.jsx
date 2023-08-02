/* eslint-disable react/prop-types */
import ToDo from "./ToDo/ToDo";
import "./ToDoList.css";
const ToDoList = ({ details, onRemove, removeAll }) => {
  function onGetTaskId(taskId) {
    onRemove(taskId);
  }

  return (
    <div className="list__container">
      {details.map((task, index) => (
        <ToDo key={index} task={task} onGetTaskId={onGetTaskId} />
      ))}
      {
        <button className="btn btn-outline-danger btn_clear" onClick={removeAll}>
          Clear All
        </button>
      }
    </div>
  );
};

export default ToDoList;
