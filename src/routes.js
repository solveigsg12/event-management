import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Home from './sections/Home/Home';
import Signup from './sections/Signup/Signup';
import About from './sections/About/index';
import Contact from './sections/Contact/index';
import PreviousPerformances from './sections/PreviousPerformances/index';

const Routes = props => (
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/home" component={Home} />
      <Route exact={true} path="/sign-up" component={Signup} />
      <Route exact={true} path="/about" component={About} />
      <Route exact={true} path="/contact" component={Contact} />
      <Route
        exact={true}
        path="/previous-performances"
        component={PreviousPerformances}
      />
    </div>
  </Router>
);

export default Routes;
