import React from 'react';
import Task from './Task';
import './Task.css';

const TaskList = ({ tasks, completeTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} completeTask={completeTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;