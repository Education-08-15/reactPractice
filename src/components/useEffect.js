import React, { useState, useEffect } from 'react';
import Post from './post';

const Effect = () => {
  const [state, setState] = useState({
    count: 0,
  });

  const increase = () => {
    setState({
      count: ++state.count,
    });
  };

  // we can use as many useEffect as we want
  useEffect(() => {
    console.log('triggered when change in state');
  }, [state]);

  useEffect(() => {
    console.log(
      'runs only at the begining because we did not put anything inside array',
    );
  }, []);

  return (
    <div>
      <div>
        <h4>Count : {state.count}</h4>
        <button onClick={increase}>Add</button>
        <Post />
      </div>
    </div>
  );
};

export default Effect;
