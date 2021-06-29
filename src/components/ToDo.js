import React, { Component } from 'react';
import Heading from './Heading';
import ToDoItem from './ToDoItem';
import './todo.css';

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [],
            inputValue: '',
            key: 0,
            isComplete: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.addClicked = this.addClicked.bind(this);
        this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
        this.toggleCompleted = this.toggleCompleted.bind(this);
    }
    // Sets this.state.inputValue to the input value onChange
    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }
    // removes  the to do from the array
    handleDeleteToDo = (toDoToRemove) => {
        let temptoDos = this.state.toDos;
        let newTemptToDos = temptoDos.filter((toDo) => {
            if (toDo.key !== toDoToRemove) {
                return toDo;
            } 
            return null;
        });
        this.setState({ toDos: newTemptToDos })
    } 

    toggleCompleted = (e, complete) => {
        let tempToDos = [...this.state.toDos];
        if (complete === false) {
            e.target.className = "toDoItem completed";
            let newtempToDos = tempToDos.map((toDo) => {
                if (parseInt(e.target.id) === toDo.key) {
                    return { ...toDo, complete: !toDo.complete }
                } else {
                    return toDo;
                }
            })
            this.setState({ toDos: newtempToDos });
        } else {
            e.target.className = "toDoItem";
            let newtempToDos = tempToDos.map((toDo) => {
                if (parseInt(e.target.id) === toDo.key) {
                    return { ...toDo, complete: !toDo.complete }
                } else {
                    return toDo;
                }
            })
            this.setState({ toDos: newtempToDos });
        }
    }
    
    // On form submit / add button clicked
    addClicked(e) {
        e.preventDefault();
        if (e.target[0].value !== '') {
            // get current set of to dos
            let temptoDos = this.state.toDos;
            let newtoDo = {
                ToDoItem: e.target[0].value,
                key: this.state.key,
                complete: false
            }
            // adding the new to do item element to the array with previous to dos 
            temptoDos.push(newtoDo);
            // increasing the key by 1 so no element has the same key number
            let newKey = this.state.key + 1;
            // updating the to dos array with previous and new todos and new key number
            this.setState({ key: newKey, toDos: temptoDos });
            // setting the input value to empty
            e.target[0].value = '';
        }
    }

    render() {
        return (
            <div>
                <Heading />
                <form onSubmit={this.addClicked}>
                    <input type="text" onChange={this.handleChange} />
                    <input type="submit" value="Add" />
                </form>
                
                <div className="toDoDiv">
                    {this.state.toDos.map((toDo) => {
                        return <ToDoItem key={toDo.key} itemNumber={toDo.key} toDo={toDo.ToDoItem} handleDeleteToDo={this.handleDeleteToDo} toggleCompleted={this.toggleCompleted} complete={toDo.complete} />
                    })}
                </div>
            </div>
        )
    }
}
