import React, { useState } from 'react';

const State = ({ initialValue }) => {
  let [count, setCount] = useState(initialValue); // we get initialValue in the form of from from index.js

  const increaseCount = () => {
    setCount((prevcount) => prevcount + 1);
  };
  const decreaseCount = () => {
    setCount((prevcount) => prevcount - 1);
  };
  const reset = () => {
    setCount((count = initialValue));
  };

  console.log(count);
  return (
    <div>
      <h3>count : {count}</h3>
      <button onClick={increaseCount}>ADD</button>
      <button onClick={decreaseCount}>SUB</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default State;
