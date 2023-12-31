import React, { useState } from 'react';
import './Task.css';

const taskNames = [
  'Buy groceries',
  'Finish homework',
  'Go for a run',
  'Read a book',
  'Write a blog post',
  'Clean the house',
  'Learn React',
  'Plan the weekend',
  'Call a friend',
  'Watch a movie',
];

const getRandomTaskName = () => {
  const randomIndex = Math.floor(Math.random() * taskNames.length);
  return taskNames[randomIndex];
};

const Task = ({ task, completeTask }) => {
  const [file, setFile] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setImageURL(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleCompleteTask = (taskId) => {
    if (file) {
      console.log('File selected:', file.name);
    }

    completeTask(taskId);
  };

  return (
    <li>
      <div className="task-info">
        <div>
          <h3>{getRandomTaskName()}</h3>
          <p>Due: {new Date().toLocaleDateString()}</p>
        </div>
        <input type="file" onChange={handleFileChange} />
      </div>
      {imageURL && <img src={imageURL} alt="Uploaded" />}
      <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
    </li>

  );
};

export default Task;