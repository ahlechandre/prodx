import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

// The HTMLElement that React will render the app.
const appElement = document.querySelector('#app');

ReactDOM.render(
  <Layout content="Layout is coming up." />,
  appElement
);
