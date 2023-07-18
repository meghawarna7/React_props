import React from 'react'
import Content from './component/Content'

export default function App2() {
  return (
    <div>
        <Content food=" rice" type=" hot"/>
        <Content food=" noodles" type=" spicy"/>
        <Content food=" juice" type=" cool"/>
    </div>
  )
}

/*

import React, { useState } from 'react';

function App2() {
  // Define state using useState hook
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler for decrementing the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App using React Hooks</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App2;
// itworks  */