import React from 'react';
import ReactDom from 'react-dom';
import State from './components/useState';
import UseState1 from './components/useState1';

const App = () => {
  return (
    <div>
      Hello
      {/* passing initialValue as prop */}
      <State initialValue={0} />
      <UseState1></UseState1>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
