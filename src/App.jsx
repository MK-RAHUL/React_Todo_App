import './App.css'
import { useState } from 'react';
function App() {

  const [input,setinput]=useState("");
  const [todo,settodo]=useState([]);



  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div className='header'>
        <h1>Todo List</h1>
        </div>
        <div>
        <input type="text" placeholder='Enter A Todo...' className='task-input' />
        <button className='button-add'>Add</button>
        </div>
        <div  className='list-item'>
        <button className='button-complete'><i class="fa-solid fa-check" ></i></button>
        <button className='button-edit'><i class="fa-regular fa-pen-to-square"></i></button>
        <button className='button-delete'><i class="fa-solid fa-trash-can"></i></button>
        </div>
        
        
        
        

      </div>
    </div>
  );
}

export default App;
