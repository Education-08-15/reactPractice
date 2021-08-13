import React from 'react';

function Age({ age }) {
  console.log('4-age');
  return (
    <div>
      <h3>The age is : {age}</h3>
    </div>
  );
}

export default React.memo(Age);
