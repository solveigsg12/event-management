import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var sendinblue = require('sendinblue-api');

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, volume 2</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.onClick}>Test</button>
      </div>
    );
  }

  onClick() {
    console.log("Click");
    var parameters = { "apiKey": "AJFGsPLMhzdBq3IN", "timeout": 5000 }; //Optional parameter: Timeout in MS
    var sendinObj = new sendinblue(parameters);

    var input = {};
    sendinObj.get_account(input, function(err, response){
         console.log(response);
    })
  }
}

export default App;
