import React from 'react';

const Item = ({ params }) => <h1>Item {params.id}</h1>;

Item.propTypes = {
  params: React.PropTypes.object,
};

export default Item;
