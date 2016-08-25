import React, { PropTypes } from 'react';
import ShirtList from '../presenters/ShirtList';

const PopularListContainer = ({ data, listId, expanded }) => {
  const items = data.shirts.sort((back, front) => (front.views - back.views));
  return (
    <ShirtList
      title="Popular on Prodx"
      items={items}
      listId={listId}
      expanded={expanded}
    />
  );
};

PopularListContainer.propTypes = {
  data: PropTypes.object,
  listId: PropTypes.number,
  expanded: PropTypes.object,
};

export default PopularListContainer;
