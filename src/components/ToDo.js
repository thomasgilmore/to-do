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
    }

    handleChange(e) {
        this.setState({ inputValue: e.target.value });
    }

    addClicked(e) {
        e.preventDefault();
        let temptoDos = this.state.toDos;
        const newToDoItem = <ToDoItem key={this.state.key} itemNumber={this.state.key} toDo={this.state.inputValue} />
        // toDos.push(this.state.inputValue);
        temptoDos.push(newToDoItem);
        let newKey = this.state.key + 1;
        this.setState({ toDos: temptoDos, key: newKey });
        e.target[0].value = '';
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
