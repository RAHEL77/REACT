import React from 'react';
import ReactDOM from 'react-dom';
import Color from './Color';

class App extends React.Component {
  render() {
    return (<Color/>);
  }
};

ReactDOM.render(<App/>,document.querySelector('#root'));