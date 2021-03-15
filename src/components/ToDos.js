import React, { Component } from 'react';
class ToDos extends Component {
	todoStyle = () => {
		return {
			display: 'flex',
			textDecoration: this.props.displayTodos.completed
				? 'line-through'
				: 'none'
		};
	};

	handleRemove = event => {
		this.props.onRemove(event.target.parentNode.getAttribute('value'));
	};

	handleComplete = event => {
		this.props.onComplete(event.target);
	};

	displayTodosList = () => {
		let todos = this.props.displayTodos.map(todo => {
			return (
				<div value={todo.id} style={this.todoStyle()}>
					<p>{todo.text}</p>
					<input
						onChange={() => this.props.onComplete(todo.id)}
						type="checkbox"
					></input>
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
	};

	render() {
		return <>{this.displayTodosList()}</>;
	}
}

export default ToDos;
