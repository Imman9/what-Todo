import React from 'react'

const AddTaskForm = ({task,onInputChange,onSubmit}) => {
  return (
    <form onSubmit={onSubmit} className="todo-form">
        <input
            type="text"
            placeholder="Add new task"
            value={task}
            onChange={onInputChange}
            className="todo-input"/>
        <button type="submit" className="add-task-button">Add Task</button>
    </form>
  )
}

export default AddTaskForm;
