import React, { Component, PropTypes } from 'react';
import ShirtList from '../presenters/ShirtList';

class RecommendedListContainer extends Component {
  constructor() {
    super();
    this.items = [];
  }

  // shouldComponentUpdate(nextProps) {
  //   return (
  //     !Object.keys(nextProps.expanded).length ||
  //     (nextProps.listId === nextProps.expanded.listId)
  //   );
  // }

  componentWillUpdate(nextProps) {
    const { recommendeds, shirts } = nextProps.data;
    this.items = recommendeds.map((id) => {
      let recommended = {};
      shirts.some((shirt) => {
        recommended = shirt;
        return shirt.id === id;
      });
      return recommended;
    });
  }

  render() {
    return (
      <ShirtList
        title="Recommended for you"
        items={this.items}
        onShirtExpand={this.props.onShirtExpand}
        listId={this.props.listId}
        expanded={this.props.expanded}
      />
    );
  }
}

RecommendedListContainer.propTypes = {
  data: PropTypes.object,
  onShirtExpand: PropTypes.func,
  listId: PropTypes.number,
  expanded: PropTypes.object,
};

export default RecommendedListContainer;
