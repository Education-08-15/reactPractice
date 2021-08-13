import React from 'react';

function Title() {
  console.log('1-title');
  return (
    <div>
      <h2> My app</h2>
    </div>
  );
}

export default React.memo(Title);
