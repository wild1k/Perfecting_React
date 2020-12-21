import React from "react";


export default function ToDoItems(props) {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.items.completed}
        onChange={() => props.handleChange(props.items.id)}
      />
      <p className="liMain2">{props.items.objective}</p>
    </div>
  );
}
