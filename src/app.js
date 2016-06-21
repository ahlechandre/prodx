import React from 'react';
import ReactDOM from 'react-dom';
import FilterableProductTable from './components/FilterableProductTable';
import PRODUCTS from './data/PRODUCTS';

// The HTMLElement that React will render the app.
const appElement = document.querySelector('#app');

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  appElement
);
