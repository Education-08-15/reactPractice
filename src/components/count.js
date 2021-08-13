import React from 'react';

function Count({ count }) {
  console.log('2-count');
  return (
    <div>
      <h3>The count is : {count}</h3>
    </div>
  );
}

export default React.memo(Count);
