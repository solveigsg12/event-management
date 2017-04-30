import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Signup from './sections/Signup';
import About from './sections/About';
import Contact from './sections/Contact';
import PreviousPerformances from './sections/PreviousPerformances';

const Routes = props => (
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
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
