import React from 'react';

const Layout = ({ children }) => <section>{children}</section>;

Layout.propTypes = {
  children: React.PropTypes.string,
};

Layout.defaultProps = {
  content: 'Layout...',
};

export default Layout;
