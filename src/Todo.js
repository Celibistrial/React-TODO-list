import React,{useState} from 'react';

export default function Todo({todo,toggle}) {
  const[shown,setShown] = useState(true);

  function toggleItem(){
    
   
    toggle(todo.id); 
  }
  if(shown){
  return <div><label><input onChange={toggleItem} type="checkbox" checked={todo.complete}></input></label >{todo.title}</div>;
}else return null;
}
