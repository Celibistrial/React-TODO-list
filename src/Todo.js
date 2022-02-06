import React from 'react';

export default function Todo({todo,toggle}) {
 

  function toggleItem(){
    
   
    toggle(todo.id); 
  }

  return <div><label><input onChange={toggleItem} type="checkbox" checked={todo.complete}></input></label >{todo.title}</div>;

}
