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

	// completedTodo = checkBox => {
	// 	// Puts a line through text of the todo
	// 	console.log(checkBox);
	// 	let boxValue = checkBox.parentNode.getAttribute('value');
	// 	if (checkBox.checked) {
	// 		let todoList = this.state.todoList.map(todo => {
	// 			if (todo.id === Number(boxValue)) {
	// 				checkBox.parentNode.style.textDecoration = 'line-through';
	// 			}
	// 			return todo;
	// 		});
	// 		this.setState({
	// 			todoList
	// 		});
	// 	} else {
	// 		let todoList = this.state.todoList.map(todo => {
	// 			if (todo.id === Number(boxValue)) {
	// 				checkBox.parentNode.style.textDecoration = '';
	// 			}
	// 			return todo;
	// 		});
	// 		this.setState({
	// 			todoList
	// 		});
	// 	}
	// };

	completedTodo = id => {
		this.setState({
			todoList: this.state.todoList.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
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
