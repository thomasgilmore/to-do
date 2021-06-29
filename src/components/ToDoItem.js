import React from 'react';
import './todoitem.css';

export default function ToDoItem(props) {
    return (
        <div className="toDoItemDiv">
            <p id={props.itemNumber} className="toDoItem" onClick={(e) => {
                props.toggleCompleted(e, props.complete)
            }}>{props.toDo}</p>
            <button className="removeButton" onClick={(e) => {
                props.handleDeleteToDo(props.itemNumber)
            }}
            > remove</button>
        </div>
    )
}
