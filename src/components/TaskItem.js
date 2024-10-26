import React from 'react';

const TaskItem = ({ task, toggleComplete, deleteTask }) => {
  return (
    <li style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
        className='item-task'
      />
      {task.text}
      <button className='delete' onClick={() => deleteTask(task.id)}>Remove</button>
    </li>
  );
};

export default TaskItem;
