import React from "react";
import Task from "./Task";
function TaskList({tasks,handleDelete}) {
  const mappedTasks = tasks.map((item,index)=>{
    return(
      <Task key={index} id={index} text = {item.text} category = {item.category} handleDelete={handleDelete}/>
    )
  })
  return (
    <div className="tasks">
      {mappedTasks}
    </div>
  );
}

export default TaskList;
