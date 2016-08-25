import React, { PropTypes } from 'react';
import ShirtList from '../presenters/ShirtList';

const RecommendedListContainer = ({ data, listId, expanded }) => {
  const { recommendeds, shirts } = data;
  const items = recommendeds.map((id) => {
    let recommended = {};
    shirts.some((shirt) => {
      recommended = shirt;
      return shirt.id === id;
    });
    return recommended;
  });

  return (
    <ShirtList
      title="Recommended for you"
      items={items}
      listId={listId}
      expanded={expanded}
    />
  );
};

RecommendedListContainer.propTypes = {
  data: PropTypes.object,
  listId: PropTypes.number,
  expanded: PropTypes.object,
};

export default RecommendedListContainer;
