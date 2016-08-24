import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Shirt = ({ item, onShirtExpand, isExpanded }) => {
  const hasContent = Object.keys(item).length;
  const itemStyle = {
    listStyle: 'none',
    width: '100%',
    maxWidth: '120px',
    height: '120px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: (() => {
      let color = '#303F9F';
      if (hasContent) {
        if (isExpanded) color = '#E91E63';
        else color = '#3F51B5';
      }
      return color;
    })(),
    color: 'white',
    padding: '16px',
  };
  const itemContent = hasContent ?
    (<div>
      <h1>{item.title}</h1>
      <p>{`$${item.price}`}</p>
      {(() => {
        let expandControl = {};
        const onShirtExpandBound = onShirtExpand.bind(this, isExpanded);
        if (isExpanded) {
          expandControl = (
            <div>
              <p>{item.description}</p>
              <p>{item.views} views</p>
              <p>{item.sales} sales</p>
              <p>
                <Link
                  class="btn"
                  to="/browse"
                  onClick={onShirtExpandBound}
                >Close</Link>
              </p>
            </div>
          );
        } else {
          expandControl = (
            <p>
              <Link
                class="btn"
                to={`/browse/shirt/${item.id}`}
                onClick={onShirtExpandBound}
              >Details</Link>
            </p>
          );
        }
        return expandControl;
      })()}
    </div>) :
    '';
  if (isExpanded) {
    itemStyle.maxWidth = '180px';
    itemStyle.height = '210px';
  }
  return (
    <li key={item.id} style={itemStyle}>
      {itemContent}
    </li>
  );
};

Shirt.propTypes = {
  item: PropTypes.object,
  onShirtExpand: PropTypes.func,
  isExpanded: PropTypes.bool,
};

export default Shirt;
