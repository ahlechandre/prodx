import React, { PropTypes } from 'react';

const BrowseLayout = ({ children }) =>
  <main>
    <h3>PRODX</h3>
    <hr />
    <section
      style={{
        display: 'flex',
        flexFlow: 'column wrap',
        maxWidth: '900px',
        margin: 'auto',
      }}
    >
      {children}
    </section>
  </main>
  ;

BrowseLayout.propTypes = {
  children: PropTypes.node,
};

export default BrowseLayout;
