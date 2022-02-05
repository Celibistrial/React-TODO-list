import React from 'react';
import Todo from './Todo';
import './TodoList.css'
export default function TodoList({ todos, toggle }) {
  // todos.map(todo => {
  // console.log(todo.id);
  // });
  return(
    <div id="todo"> {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} toggle={toggle} />
    })}
    </div>
  );
}
