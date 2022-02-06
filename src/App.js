import React, {useState,useRef,useEffect} from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);
  const LOCAL_STORAGE_KEY = 'todoApp.todos'

  const todoBoxRef = useRef();
const toggle = (id) => {
  const newTodo = [...todos];
  const todo = newTodo.find(todo => todo.id === id);
  todo.complete = !todo.complete;
  setTodos(newTodo)
 
}

  function addItem(e){
    const title = todoBoxRef.current.value;
    if(title === '') return;
    setTodos(prevTodos=>{
     
      
      
      
      return [...prevTodos,{id:uuidv4(),title:title,complete:false}]
        
    });
    todoBoxRef.current.value = null;
  }
  
  const remove = (id) => {
   
    const newTodo = [...todos];

    for(const i of id){
    const todo = newTodo.find(todo => todo.id === i.id);
    newTodo.splice(newTodo.indexOf(todo),1);
    }
    
    setTodos(newTodo);
  }
  function clearList(){
    const newTodo = [...todos];
    const rTodo = [];
    for(let i of newTodo){
      if(i.complete) rTodo.push(i);
   
    }
    console.log(rTodo);
    remove(rTodo);
  }


  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos);
   
  },[]);

  useEffect(() =>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todos));
  
  },[todos]);
  return (
  <div>
  
  <input id="textbox" ref={todoBoxRef} type="text"></input>
  <button id="addToList" onClick={addItem}><label className="txt">Add to list</label></button>
  <button id="clear" onClick={clearList}><label className="txt">Clear checked</label></button>
  <TodoList todos={todos} key ={uuidv4()} toggle={toggle}/>
  <div ></div>
  </div>
  );
  }
  
export default App;
