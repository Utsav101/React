import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import './index.css';

class App extends Component {
  state = {
    todos: []
  }
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  
  addTodo = (todo) => {
      todo.id = Math.random();
      let todos = [...this.state.todos, todo];
      this.setState({
          todos
    })
  }
  
  
  updateTodo = (id) => {
      console.log('id',id);
      const {todos} = this.state;
      let todo = todos.filter(todo => todo.id === id)
       const index= todos.findIndex((todo)=>{
        return todo.id === id;
    });
    console.log(index)
    
    let data = prompt("Enter the changes: ");
    console.log(data);
    todos[index].content = data;
    this.setState({todos});
   
  };
  
  render() {
    return (
      <div className="todo-app">
        <h1 className="blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}   updateTodo={this.updateTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}
export default App;
