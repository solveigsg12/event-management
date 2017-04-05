import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import Home from './sections/Home/Home';
import Signup from './sections/Signup/Signup';

const Routes = (props) => (
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/home" component={Home} />
      <Route exact={true} path="/signup" component={Signup} />
    </div>
  </Router>
);

export default Routes;
