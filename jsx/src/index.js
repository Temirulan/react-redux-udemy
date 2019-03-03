// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//const React = requires('react');

// Create a react component
const App = function() {
  const buttonText = { text: 'Click me please!' };
  const labelText = 'Enter name pls:';

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
    </div>
  )

}

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);