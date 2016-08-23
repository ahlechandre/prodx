import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// Layouts
import App from './layouts/App';
import BrowseLayout from './layouts/BrowseLayout';

// Views
import BrowseView from './views/BrowseView';
import GenreView from './views/GenreView';
import SearchView from './views/SearchView';
import NotFoundView from './views/NotFoundView';

// The HTMLElement that React will render the app.
const appElement = document.querySelector('#app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="browse" component={BrowseLayout}>
        <IndexRoute component={BrowseView} />
        <Route path="genre/:id" component={GenreView} />
      </Route>
      <Route path="search" component={SearchView} />
      <Route path="*" component={NotFoundView} />
    </Route>
  </Router>
  , appElement);
