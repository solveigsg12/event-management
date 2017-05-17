import React, {Component} from 'react';
import './App.css';
import FrontPage from './sections/FrontPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono"
          rel="stylesheet"
        />
        <FrontPage />
      </div>
    );
  }
}

export default App;
