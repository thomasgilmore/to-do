import React from 'react';
import './todoitem.css';

export default function ToDoItem(props) {
    return (
        <div className="toDoItemDiv">
            <input type="checkbox" className="checkbox" />
            <p className="toDoItem">{props.toDo}</p>
        </div>
    )
}
