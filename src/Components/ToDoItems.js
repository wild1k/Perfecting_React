import React from "react";


export default function ToDoItems(props) {


  return (

    <div>
      <input type="checkbox" checked={props.todoData.completed}/> 
  <p className="liMain2">{props.todoData.objective}</p>
    </div>
  );
}
