import React from 'react'

function ToDoItem({task, deleteTask, toggleCompleted}) {
    const handleChange = () => {
        toggleCompleted(task.id)
    }

    return (
        <div className='todo-check'>
            <input
            key= {task.id}
            type='checkbox'
            checked={task.completed}
            onChange={handleChange}
            />
            <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
                <span className='task-text'>{task.text}</span>
            {task.date && (
                <div className='task-date'>
                     📅 {new Date(task.date).toLocaleDateString('en-US', {
                        day: 'numeric', month: 'short', year: 'numeric'
                        })}
                </div>
            )}
            </div>
            <button onClick={()=> deleteTask(task.id)} className='delete-task'>X</button>
        </div>
    )
}

export default ToDoItem