import { useState } from "react"
import React from 'react'


const TaskInput = () => {

    const [task, setTask] = useState('');

    function handleInputValue(event) {
        setTask(event.target.value);
    }
  return (
    <form className='inputField'>
        <input type="text" placeholder='Add Item'
        onChange={handleInputValue}/>
        <button className=''>+</button>

    </form>
  )
}

export default TaskInput