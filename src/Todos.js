import React from 'react';
import './index.css';

const Todos = ({todos, deleteTodo, updateTodo}) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
        <div className="design">
          <span className="val">{todo.content}</span>
        </div>
        <div className="buttons">
          <button className="button" onClick={() => {updateTodo(todo.id)}}>Edit</button>
          <button className="button" onClick={() => {deleteTodo(todo.id)}}>Delete</button>
        </div>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left, yay!</p>
  );
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}
export default Todos; 

