import React, { PropTypes } from 'react';

const Shirt = ({ item, clickHandler, isExpanded }) => {
  const hasContent = Object.keys(item).length;
  const itemStyle = {
    'list-style': 'none',
    width: '100%',
    'max-width': '120px',
    height: '200px',
    'background-color': (() => {
      let color = '#999';
      if (hasContent) {
        if (isExpanded) color = '#303F9F';
        else color = '#3F51B5';
      }
      return color;
    })(),
    color: (hasContent ? 'white' : '#222'),
    padding: '16px',
  };
  let itemContent = {};

  if (hasContent) {
    itemContent = (
      <div>
        <h1>{item.title}</h1>
        <p>{`$${item.price}`}</p>
        {(() => {
          let details = null;
          if (isExpanded) {
            details = (
              <div>
                <p>{item.description}</p>
                <p>{item.views} views</p>
                <p>{item.sales} sales</p>
              </div>
            );
          }
          return details;
        })()}
      </div>
    );
  } else {
    itemContent = '';
  }

  return (
    <li data-item-id={item.id} style={itemStyle} onClick={clickHandler}>
      {itemContent}
    </li>
  );
};

Shirt.propTypes = {
  item: PropTypes.object,
  clickHandler: PropTypes.func,
  isExpanded: PropTypes.bool,
};

export default Shirt;
