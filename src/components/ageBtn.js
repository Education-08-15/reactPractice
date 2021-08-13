import React from 'react';

function AgeBtn({ handleAge }) {
  console.log('5-ageBtn');
  return (
    <div>
      <button onClick={handleAge}>Increment the age</button>
    </div>
  );
}

export default React.memo(AgeBtn);
