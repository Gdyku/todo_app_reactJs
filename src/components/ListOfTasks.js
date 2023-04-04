import React from "react";
import "../Styles/ListOfTasks.css"

function ListOfTasks() {
  return (
    <div className="todo-list-container">
      <div className="todo-list">
        <ul>
          <li>Bag</li>
          <li>Bucket</li>
          <li>Hat</li>
        </ul>
      </div>
    </div>
  );
}

export default ListOfTasks;
