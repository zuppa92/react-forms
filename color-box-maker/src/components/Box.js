// src/components/Box.js
import React from 'react';

function Box({ id, width, height, backgroundColor, removeBox }) {
  const remove = () => removeBox(id);

  return (
    <div>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: backgroundColor
        }}
      />
      <button onClick={remove}>X</button>
    </div>
  );
}

export default Box;