import React, { PropTypes } from 'react';
import Shirt from './Shirt';
import _ from 'lodash';

const ShirtList = ({ items, title, listId, expanded }) => {
  const sectionStyle = {
    display: 'flex',
    flexFlow: 'column wrap',
    padding: '16px',
  };
  const itemsStyle = {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  };
  const itemsInternal = items.length ? items : [{}, {}, {}, {}, {}];
  return (
    <section style={sectionStyle}>
      <h1>{title}</h1>
      <ul style={itemsStyle}>
        {itemsInternal.map((item) => {
          return (
            <Shirt
              key={_.uniqueId('shirtitem_')}
              item={item}
              listId={listId}
              isExpanded={(expanded.listId === listId && expanded.shirtId === item.id)}
            />
          );
        })}
      </ul>
    </section>
  );
};

ShirtList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
  listId: PropTypes.number,
  expanded: PropTypes.object,
};

export default ShirtList;
