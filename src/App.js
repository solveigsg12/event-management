import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FrontPage from './sections/FrontPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FrontPage />
      </div>
    );
  }
}

export default App;
