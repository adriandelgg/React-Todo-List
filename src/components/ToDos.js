import React, { Component } from 'react';

export class ToDos extends Component {
	todoStyle = () => {
		return {
			display: 'flex',
			background: 'white'
		};
	};

	handleRemove = event => {
		this.props.onRemove(event.target.name);
		console.log(event.target.name);
	};

	displayTodosList() {
		let list = this.props.displayTodos;
		console.log(list.length);
		let todos = this.props.displayTodos.map(todo => {
			return (
				<div style={this.todoStyle()}>
					<p>{todo.text}</p>
					<input type="checkbox"></input>
					<button
						onClick={this.handleRemove}
						style={{ background: 'red' }}
					>
						X
					</button>
				</div>
			);
		});
		return todos;
	}

	render() {
		return <>{this.displayTodosList()}</>;
	}
}

export default ToDos;
