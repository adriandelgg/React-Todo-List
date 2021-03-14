import React, { Component } from 'react';
import './App.css';

import CreateToDo from './CreateToDo';
import ToDos from './ToDos';
class App extends Component {
	state = {
		todoList: []
	};

	addNewTodo = text => {
		let todoList = this.state.todoList;
		let newTodo = { text, completed: false, id: Math.random() };
		todoList.push(newTodo);
		this.setState({
			todoList
		});
	};

	removeTodo = toRemove => {
		let todoList = this.state.todoList.filter(todo => {
			return todo.id !== Number(toRemove);
		});
		this.setState({
			todoList
		});
	};

	completedTodo = checkBox => {
		// Puts a line through text of the todo
		if (checkBox.checked) {
			// Working on changing only the selected checkbox
			// let index = this.state.todoList.findIndex(num => {
			// 	return num.id === Number(checkBox.parentNode.getAttribute('value'));
			// });
			// let newState = this.state.todoList.splice(index);

			// console.log(newState);

			checkBox.parentNode.style.textDecoration = 'line-through';
		} else {
			checkBox.parentNode.style.textDecoration = '';
		}
	};

	render() {
		return (
			<div className="todo-app">
				<h1>React ToDo List</h1>
				<CreateToDo
					onNewTodo={this.addNewTodo}
					displayTodos={this.state.todoList}
				/>
				<ToDos
					onComplete={this.completedTodo}
					displayTodos={this.state.todoList}
					onRemove={this.removeTodo}
				/>
			</div>
		);
	}
}

export default App;
