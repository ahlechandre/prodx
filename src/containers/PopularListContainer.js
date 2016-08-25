import React, { Component, PropTypes } from 'react';
import ShirtList from '../presenters/ShirtList';

class PopularListContainer extends Component {
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
    const { shirts } = nextProps.data;
    this.items = shirts.sort((back, front) => (front.views - back.views));
  }

  render() {
    return (
      <ShirtList
        title="Popular on Prodx"
        items={this.items}
        listId={this.props.listId}
        expanded={this.props.expanded}
      />
    );
  }
}

PopularListContainer.propTypes = {
  data: PropTypes.object,
  listId: PropTypes.number,
  expanded: PropTypes.object,
};

export default PopularListContainer;
