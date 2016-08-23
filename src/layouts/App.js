import React, { PropTypes } from 'react';

const App = ({ children, location }, context) => {
  // Automatically changes the index route to "/browse".
  if (location.pathname === '/') {
    context.router.push('browse');
  }

  return (
    <main>
      {children}
    </main>
  );
};

App.contextTypes = {
  router: PropTypes.object,
};

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
};

export default App;
