import React, { useState } from 'react';

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
      {getRandomTaskName()}
      <input type="file" onChange={handleFileChange} />
      {imageURL && <img src={imageURL} alt="Uploaded" style={{ maxWidth: '100px' }} />}
      <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
    </li>
  );
};

export default Task;