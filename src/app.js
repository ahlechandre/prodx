import React from 'react';
import ReactDOM from 'react-dom';

const Text = ({ children }) => <h1>{children}</h1>;

Text.propTypes = { children: React.PropTypes.string };
Text.defaultProps = { children: 'default' };

ReactDOM.render(
  <Text>Hello world</Text>,
  document.querySelector('#app')
);
