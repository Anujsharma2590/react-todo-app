import React from "react";
import './ListItem.css'
function ListItem({ title, id, status, handleDelete,handleComplete }) {
  const handleDeleteFn = () => {
    handleDelete(id);
  };
    const handleCompleteFn = () => {
        handleComplete(id);
  }
  return (
    <div className="Todo">
      <div>
        <h3
          style={{
            textDecoration: status ? "line-through" : "none",
            color: status ? "#74726f" : "#ff9900",
          }}
        >
          {title}
        </h3>
      </div>
      <div className="TodoChild">
        <div className="completeBtn">
          <button onClick={handleCompleteFn}>
            {status ? "uncomplete" : "complete"}
          </button>
        </div>
        <div className="deleteBtn">
          <button onClick={handleDeleteFn}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export { ListItem };
