import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
// import createBrowserHistory from 'history/lib/createBrowserHistory';

// Components
import Layout from './components/Layout';
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Items from './components/Pages/Items';
import Item from './components/Pages/Item';
import NotFound from './components/Pages/NotFound';

// The HTMLElement that React will render the app.
const appElement = document.querySelector('#app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="items" component={Items}>
        <Route path=":id" component={Item} />
      </Route>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  appElement
);
