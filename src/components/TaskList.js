import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, completeTask }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <Task key={task.id} task={task} completeTask={completeTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;