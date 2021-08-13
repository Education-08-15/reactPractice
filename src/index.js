import React, { useState, useCallback } from 'react';
import reactDom from 'react-dom';
import Age from './components/age';
import AgeBtn from './components/ageBtn';
import Count from './components/count';
import CountBtn from './components/countBtn';
import Title from './components/title';

function App() {
  let [count, setCount] = useState(0);
  let [age, setAge] = useState(10);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const incrementAge = useCallback(() => {
    setAge(++age);
  }, [age]);
  return (
    <div>
      <Title />
      <hr />
      <Count count={count} />
      <CountBtn handleCount={incrementCount} />
      <Age age={age} />
      <AgeBtn handleAge={incrementAge} />
    </div>
  );
}

export default App;

reactDom.render(<App />, document.getElementById('root'));
