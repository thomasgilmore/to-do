import React, { Component } from 'react';
import Heading from './Heading';
import ToDoItem from './ToDoItem';
import './todo.css'

export default class ToDo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toDos: [],
            inputValue: '',
            key: 0
        };
        this.handleChange = this.handleChange.bind(this);
        this.addClicked = this.addClicked.bind(this);
        this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    }
    // Sets this.state.inputValue to the input value onChange
    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }
    // removes  the to do from the array
    handleDeleteToDo = (toDoToRemove) => {
        let tempToDos = this.state.toDos;
        let newTemptToDos = tempToDos.filter((toDo) => {
            if (toDo.props.toDo !== toDoToRemove) {
                return toDo;
            }
        });
        this.setState({ toDos : newTemptToDos })
    }    
    // On form submit / add button clicked
    addClicked(e) {
        e.preventDefault();
        if (e.target[0].value !== '') {
            // get current set of to dos
            let temptoDos = this.state.toDos;
            const newToDoItem = <ToDoItem key={this.state.key} itemNumber={this.state.key} toDo={this.state.inputValue} handleDeleteToDo={this.handleDeleteToDo} />
            // adding the new to do item element to the array with previous to dos 
            temptoDos.push(newToDoItem);
            // increasing the key by 1 so no element has the same key number
            let newKey = this.state.key + 1;
            // updating the to dos array with previous and new todos and new key number
            this.setState({ toDos: temptoDos, key: newKey });
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
                    {this.state.toDos.map(toDo => (toDo))}
                </div>
            </div>
        )
    }
}
