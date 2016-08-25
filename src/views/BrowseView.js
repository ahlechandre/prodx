import React, { PropTypes } from 'react';
import PopularListContainer from '../containers/PopularListContainer';
import RecommendedListContainer from '../containers/RecommendedListContainer';

const BrowseView = ({ data, shirtLists, items }) => {
  return (
    <section>
      <PopularListContainer
        data={data}
        listId={shirtLists.popular}
        expanded={items.expanded}
      />
      <RecommendedListContainer
        data={data}
        listId={shirtLists.recommended}
        expanded={items.expanded}
      />
    </section>
  );
};

BrowseView.propTypes = {
  data: PropTypes.object,
  shirtLists: PropTypes.object,
  items: PropTypes.object,
};

export default BrowseView;
