/* eslint-disable react/prop-types */

import { AiFillDelete } from "react-icons/ai";

const ToDo = ({task,onGetTaskId}) => {


    function removeTask(){
        onGetTaskId(task.id);
      }
    return (
        <div className="task">{task.name} <AiFillDelete onClick={removeTask}/> </div>
    );
}

export default ToDo;
