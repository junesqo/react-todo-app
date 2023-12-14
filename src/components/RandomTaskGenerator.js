import React from 'react';

const RandomTaskGenerator = ({ generateRandomTask }) => {
  return (
    <button onClick={generateRandomTask}>
      Generate Random Task
    </button>
  );
};

export default RandomTaskGenerator;