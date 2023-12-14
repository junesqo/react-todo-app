import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import RandomTaskGenerator from './components/RandomTaskGenerator';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const generateRandomTask = () => {
    // Здесь добавьте логику для генерации случайных задач
    const newTask = {
      id: tasks.length + 1,
      text: `Task ${tasks.length + 1}`,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = taskId => {
    // Здесь добавьте логику для подтверждения выполнения задачи
    console.log(`Task ${taskId} completed`);
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <RandomTaskGenerator generateRandomTask={generateRandomTask} />
      <TaskList tasks={tasks} completeTask={completeTask} />
    </div>
  );
};

export default App;
