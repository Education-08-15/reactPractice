import React, { useState } from 'react';

const UseState1 = () => {
  //adding more properties to the same state

  const [state, setState] = useState({
    count: 0,
    user: 'Nanu',
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      realName: 'Shikshya',
      nickName: 'Nanu',
    },
    {
      id: 2,
      realName: 'Sandhya',
      nickName: 'Sanu',
    },
  ]);

  const Add = () => {
    setState({
      ...state,
      count: ++state.count,
    });
  };

  const Sub = () => {
    setState({
      ...state,
      count: --state.count,
    });
  };

  const reset = () => {
    setState({
      ...state,
      count: 0,
    });
  };

  const addMorePost = () => {
    let newPost = {
      id: 3,
      realName: 'Snowie',
      nickName: 'Kanxi',
    };
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h2>{state.user}</h2>
      <h3>count : {state.count}</h3>
      <button onClick={Add}>ADD</button>
      <button onClick={Sub}>SUB</button>
      <button onClick={reset}>RESET</button>
      <hr />

      {posts.map((item, index) => {
        return (
          <div key={item.id}>
            <div>Rname : {item.realName} </div>
            <div> Nname : {item.nickName} </div>
            <hr />
          </div>
        );
      })}

      <div>
        <button onClick={addMorePost}>Add more posts</button>
      </div>
    </div>
  );
};

export default UseState1;
