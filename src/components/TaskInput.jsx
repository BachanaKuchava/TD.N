import { useState } from "react"
import React from 'react'


const TaskInput = ({addTask}) => {

    const [task, setTask] = useState('');
    // console.log(task);

    function handleAddTask( event) {
        event.preventDefault();

        if (task.trim() === '') return ; 

        addTask(task);
        setTask('');
    }

    function handleInputValue(event) {
        setTask(event.target.value);
    }
  return (
    <form className='inputField' onSubmit={handleAddTask    }>
        <input type="text" value={task} placeholder='Add Item'
        onChange={handleInputValue}/>
        <button className=''>+</button>

    </form>
  )
}

export default TaskInput