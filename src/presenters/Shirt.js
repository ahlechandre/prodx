import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Shirt = ({ item, onShirtExpand }) => {
  const hasContent = Object.keys(item).length;
  const itemStyle = {
    listStyle: 'none',
    width: '100%',
    maxWidth: '120px',
    height: '200px',
    backgroundColor: (hasContent ? '#3F51B5' : '#303F9F'),
    color: 'white',
    padding: '16px',
  };
  const itemContent = hasContent ?
    (<div>
      <h1>{item.title}</h1>
      <p>{`$${item.price}`}</p>
      <p>
        <Link
          class="btn"
          to={`/browse/shirt/${item.id}`}
          onClick={onShirtExpand}
        >Details</Link>
      </p>
    </div>) :
    '';

  return (
    <li key={item.id} style={itemStyle}>
      {itemContent}
    </li>
  );
};

Shirt.propTypes = {
  item: PropTypes.object,
  onShirtExpand: PropTypes.func,
};

export default Shirt;
