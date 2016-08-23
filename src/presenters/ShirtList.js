import React, { PropTypes } from 'react';
import Shirt from './Shirt';

const ItemsList = ({ items, title }) => {
  const sectionStyle = {
    display: 'flex',
    'flex-flow': 'column wrap',
    padding: '16px',
  };
  const itemsStyle = {
    display: 'flex',
    'flex-flow': 'row nowrap',
    'justify-content': 'space-between',
    'align-items': 'center',
    padding: 0,
  };
  let itemsInternal = [];

  if (!items.length) {
    itemsInternal = ['', '', '', '', ''];
  } else {
    itemsInternal = items;
  }

  return (
    <section style={sectionStyle}>
      <h1>{title}</h1>
      <ul style={itemsStyle}>
        {itemsInternal.map((item) => <Shirt item={item} />)}
      </ul>
    </section>
  );
};

ItemsList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default ItemsList;
