import './App.css'
import {IoMdCheckmark} from 'react-icons/io'
import {FaRegEdit} from 'react-icons/fa'
import {TiDelete} from 'react-icons/ti'
import { useState } from 'react';
function App() {
  const [todos,settodos]=useState([])
  const [todo,settodo]=useState("")
  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div className='header'>
        <h1>Todo List</h1>
        </div>
        <div>
        <input value={todo} onChange={(e)=>settodo(e.target.value)} type="text" placeholder='Enter A Todo...' className='task-input' />
        <button onClick={()=>settodos([...todos,todo])}  className='button-add'>Add</button>
        </div>

        {
          todos.map((value)=>{
            return(
            <div  className='list-item'>
            <p>{value}</p>
            <IoMdCheckmark className='logo'/>
            <FaRegEdit  className='logo1'/>
            <TiDelete  className='logo2'/>
          </div>
            )
          })
      }
</div>
    </div>
  );
}

export default App;
