import React, { Component } from 'react';

export class CreateToDo extends Component {
   constructor(props) {
      super(props);
      this.handleNewTodo = this.handleNewTodo.bind(this);
   }

   handleNewTodo(event) {
      if (event.key === 'Enter') {
         this.props.onNewTodo(event.target.value);
      }
   }

   render() {
      return (
         <>
            <input
               type="text"
               placeholder="Enter a new ToDo!"
               onKeyPress={this.handleNewTodo}
            ></input>
         </>
      );
   }
}

export default CreateToDo;
