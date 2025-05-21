import React, { useState } from 'react'

function Form({ addTask, checkAll, openConfirmation}) {
    const [inputValue, setInputValue] = useState('')
    const [taskDate, setTaskDate] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        if (inputValue.trim() === '') return
        addTask(inputValue, taskDate)
        setInputValue('')
        setTaskDate('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Start typing your next task' 
            className='form-input'/>

            <input
            type='date'
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className=' form-input date-input'
            style={{ marginBottom: '1rem'}}
            />

            <div className='button-group'>
            <button type='submit' className='task-button'> + New Task </button>
            <button type='button' className='check-button' onClick={checkAll}> ✓ Check all tasks</button>
            <button type='button' className='delete-button' onClick={openConfirmation}> X Cancel </button>
            </div>
        </form>
    )
}

export default Form