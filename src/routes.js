import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import App from './App';
import Signup from './sections/Signup';
import About from './sections/About';
import Why from './sections/Why';
import ContactUs from './sections/ContactUs';
import PreviousPerformances from './sections/PreviousPerformances';
import PreviousPerformanceInfo from './sections/PreviousPerformanceInfo';

const Routes = props => (
  <Router>
    <div>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/sign-up" component={Signup} />
      <Route exact={true} path="/about" component={About} />
      <Route exact={true} path="/why" component={Why} />
      <Route exact={true} path="/contact-us" component={ContactUs} />
      <Route
        exact={true}
        path="/performances"
        component={PreviousPerformances}
      />
      <Route
        exact={true}
        path="/previous-performance-info/:previousPerformance"
        component={PreviousPerformanceInfo}
      />
    </div>
  </Router>
);

export default Routes;
