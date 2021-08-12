import React, { useState, useEffect } from 'react';

const Post = () => {
  const [value, setValue] = useState({
    count: 0,
  });
  const remove = () => {
    setValue([]);
  };
  const decrease = () => {
    setValue({
      count: --value.count,
    });
  };
  useEffect(() => {
    console.log(' changed for sub');
  }, [value]);
  return (
    <div>
      <div>
        <h3>Count : {value.count}</h3>
        <button onClick={decrease}> Sub</button>
        <button onClick={remove}>remove</button>
      </div>
    </div>
  );
};

export default Post;
