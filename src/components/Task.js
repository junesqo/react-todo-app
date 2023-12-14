import React, { useState } from 'react';

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
      {task.text}
      <input type="file" onChange={handleFileChange} />
      {imageURL && <img src={imageURL} alt="Uploaded" style={{ maxWidth: '100px' }} />}
      <button onClick={() => handleCompleteTask(task.id)}>Complete</button>
    </li>
  );
};

export default Task;