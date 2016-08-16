import React from 'react';
import { Link } from 'react-router';

const Items = ({ children }) =>
  <div>
    <h1>{'Items'}</h1>
    <ul>
      <li><Link to="/items/1">Item 1</Link></li>
      <li><Link to="/items/2">Item 2</Link></li>
      <li><Link to="/items/3">Item 3</Link></li>
    </ul>
    {children}
  </div>
  ;

Items.propTypes = {
  children: React.PropTypes.node,
};

export default Items;
