import React from 'react';

function CountBtn({ handleCount }) {
  console.log('3-countBtn');
  return (
    <div>
      <button onClick={handleCount}>Increment the count</button>
    </div>
  );
}

export default React.memo(CountBtn);
