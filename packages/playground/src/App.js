import React from 'react';
import logo from './logo.svg';
import './App.css';

import MyComponent from 'component';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="https://github.com/compulim/my-component">
          <img
            alt="Fork me on GitHub"
            src="https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png"
            style={{ position: 'absolute', top: 0, left: 0, border: 0 }}
          />
        </a>
        <MyComponent />
      </div>
    );
  }
}
