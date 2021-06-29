import React, { useState } from 'react';
import HeadingFuncational from './HeadingFunctional';
import ToDoItem from './ToDoItem';
import './todo.css';

export default function ToDoFunctional() {
    const [toDos, setToDos] = useState([]);
    const [, setInputValue] = useState('');
    const [key, setKey] = useState(0);
    
    // sets inputValue to the input value onChange
    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    // removes the to do from thr array 
    const handleDeleteToDo = (toDoToRemove) => {
        let temptoDos = toDos;
        let newTemptToDos = temptoDos.filter((toDo) => {
            if (toDo.key !== toDoToRemove) {
                return toDo;
            } 
            return null;
        });
        setToDos(newTemptToDos);
    }
    // when the to do is clicked a line-through will be applied to style
    const toggleCompleted = (e, complete) => {
        let tempToDos = [...toDos];
        if (complete === false) {
            e.target.className = "toDoItem completed";
            let newtempToDos = tempToDos.map((toDo) => {
                if (parseInt(e.target.id) === toDo.key) {
                    return { ...toDo, complete: !toDo.complete }
                } else {
                    return toDo;
                }
            })
            setToDos(newtempToDos);
        } else {
            e.target.className = "toDoItem";
            let newtempToDos = tempToDos.map((toDo) => {
                if (parseInt(e.target.id) === toDo.key) {
                    return { ...toDo, complete: !toDo.complete }
                } else {
                    return toDo;
                }
            })
            setToDos(newtempToDos);
        }
    }

    // On form submit / add button clicked
    const addClicked = (e) => {
        e.preventDefault();
        if (e.target[0].value !== '') {
            // get current set of to dos
            let temptoDos = toDos;
            let newtoDo = {
                ToDoItem: e.target[0].value,
                key: key,
                complete: false
            }
            // adding the new to do item element to the array with previous to dos 
            temptoDos.push(newtoDo);
            // increasing the key by 1 so no element has the same key number
            let newKey = key + 1;
            // updating the to dos array with previous and new todos and new key number
            setToDos(temptoDos);
            setKey(newKey);
            // setting the input value to empty
            e.target[0].value = '';
        }
    }
    return (
        <div>
            <HeadingFuncational />
            <form onSubmit={addClicked}>
                <input type="text" onChange={handleChange} />
                <input type="submit" value="Add" />
            </form>
            
            <div className="toDoDiv">
                {toDos.map((toDo) => {
                    return <ToDoItem key={toDo.key} itemNumber={toDo.key} toDo={toDo.ToDoItem} handleDeleteToDo={handleDeleteToDo} toggleCompleted={toggleCompleted} complete={toDo.complete} />
                })}
            </div>
        </div>
    )
}
