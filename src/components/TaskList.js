import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {
  return (
    <ul className="task-lists">
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          toggleComplete={onToggleComplete} 
          deleteTask={onDelete} 
        />
      ))}
    </ul>
  );
};

export default TaskList;
