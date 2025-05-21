import React from 'react'
import ToDoItem from './ToDoItem'

function ToDoApp({ tasks, deleteTask, toggleCompleted }) {
  return (
    <div className="todo-list">
      {tasks.map(task => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  )
}

export default ToDoApp