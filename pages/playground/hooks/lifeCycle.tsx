import React, { useState } from 'react';

const lifeCycle = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="container">
      <h1>Play Ground</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Counter add
      </button>
    </div>
  );
};

export default lifeCycle;
