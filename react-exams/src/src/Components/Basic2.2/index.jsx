import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


const data = ["Hello", "World"];
const number1 = 5;
const number2 = 6;
const string = "I Love React!";


ReactDOM.render(
  <React.StrictMode>
    <h1>{data.join(" ")}</h1>
    <p>
      {number1} + {number2} = {number1 + number2}
    </p>
    <p>The String's Length is {string.length}</p>
  </React.StrictMode>,
  document.getElementById("root")
);