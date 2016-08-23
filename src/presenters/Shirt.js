import React, { PropTypes } from 'react';

const Shirt = ({ item }) => {
  const hasContent = Object.keys(item).length;
  const itemStyle = {
    'list-style': 'none',
    width: '100%',
    'max-width': '120px',
    height: '200px',
    'background-color': (hasContent ? '#222' : '#999'),
    color: (hasContent ? 'white' : '#222'),
    padding: '16px',
  };
  let itemContent = {};

  if (hasContent) {
    itemContent = (
      <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <p>{`$${item.price}`}</p>
        <p>{item.views} views</p>
        <p>{item.sales} sales</p>
      </div>
    );
  } else {
    itemContent = '';
  }

  return (
    <li style={itemStyle}>
      {itemContent}
    </li>
  );
};

Shirt.propTypes = {
  item: PropTypes.object,
};

export default Shirt;
