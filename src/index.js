import React from 'react';
import ReactDom from 'react-dom';
import State from './components/useState';

const App = () => {
  return (
    <div>
      Hello
      {/* passing initialValue as prop */}
      <State initialValue={0} />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
