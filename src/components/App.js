import React, { Component } from 'react';
import './App.css';

import CreateToDo from './CreateToDo';
import ToDos from './ToDos';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         todoList: [],
      };

      this.addNewTodo = this.addNewTodo.bind(this);
      this.displayNewTodo = this.displayNewTodo.bind(this);
      this.removeTodo = this.removeTodo.bind(this);
   }

   addNewTodo(text) {
      let list = this.state.todoList;
      let newTodo = { text: text, completed: false, id: list.length };
      // console.log(newTodo);
      list.push(newTodo);
      this.setState({
         todoList: list,
      });
   }

   displayNewTodo(newTodo) {
      // Probably not needed
   }

   removeTodo(toRemove) {
      let list = this.state.todoList;
      let newTodos = list.filter(todo => {
         return toRemove !== todo.id;
      });
      this.setState({
         todoList: newTodos,
      });
   }

   completedTodo() {}

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
