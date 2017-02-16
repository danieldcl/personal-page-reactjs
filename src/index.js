import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from './components/app';
import Resume from './components/resume/resume';
import About from './components/about/about';
import Portfolio from './components/portfolio/portfolio';

ReactDOM.render(
    <Router history={browserHistory} >
      <Route path="/"  component={App}>
        <IndexRoute component={Portfolio}  />
        <Route path="about" component={About} />
        <Route path="resume" component={Resume} />
      </Route>
    </Router>
    ,
  document.getElementById('app'));
