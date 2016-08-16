import React from 'react';
import { Link } from 'react-router';

const Layout = ({ children }) =>
  <main>
    <header>
      <p>Header</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/items">Items</Link></li>
      </ul>
    </header>
    <section>{children}</section>
    <footer>
      <p>Footer</p>
    </footer>
  </main>
  ;

Layout.propTypes = {
  children: React.PropTypes.node,
};

export default Layout;
