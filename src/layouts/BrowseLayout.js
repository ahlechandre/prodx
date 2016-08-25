import React, { PropTypes } from 'react';

const BrowseLayout = ({ children, shirtLists, items, data }) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { children, shirtLists, items, data }));
  return (
    <section>
      {childrenWithProps}
    </section>
  );
};

BrowseLayout.propTypes = {
  children: PropTypes.node,
  shirtLists: PropTypes.object,
  items: PropTypes.object,
  data: PropTypes.object,
};

export default BrowseLayout;
