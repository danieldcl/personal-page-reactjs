import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import App from './components/app';
import Work from './components/work/work';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Portfolio from './components/portfolio/portfolio';

ReactDOM.render(
    <Router history={browserHistory} >
      <Route path="/"  component={App}>
        <IndexRoute component={Portfolio}  />
        <Route path="about" component={About} />
        <Route path="work" component={Work} />
        <Route path="contact" component={Contact} />
      </Route>
    </Router>
    ,
  document.getElementById('app'));
