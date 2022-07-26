import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"
import Loader from './components/Loader';

function App() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState({})

  interface Todo{
    title: string;
    id: number;
    completed: boolean;
  }

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(res => setTodos(res.slice(0,10)))
    .catch(err => setError(err))
  }, [])


  // we want just 10 records so lets apply an array method
  // 1st element in the array anf the last element which is not included

  // install it in the state 
  // error handling using cacth 

  //map though 
  return (
    <div className="App">
  {todos.length > 0 ? todos.map((todo:Todo) =>console.log(todo.title)) : (<Loader  />)}
    </div>
  );
}

export default App;
