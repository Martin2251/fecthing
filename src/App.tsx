import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect} from "react"

function App() {

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos`)
    .then(response => response.json())
    .then(res => console.log (res))
  }, [])
  return (
    <div className="App">
   
    </div>
  );
}

export default App;
