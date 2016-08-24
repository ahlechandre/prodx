import React, { Component, PropTypes } from 'react';
import ShirtList from '../presenters/ShirtList';

class PopularListContainer extends Component {
  constructor() {
    super();
    this.items = [];
  }

  shouldComponentUpdate(nextProps) {
    return (typeof nextProps.data.shirts !== 'undefined');
  }

  componentWillUpdate(nextProps) {
    const { shirts } = nextProps.data;
    this.items = shirts.sort((back, front) => (front.views - back.views));
  }

  render() {
    return (
      <ShirtList
        title="Popular on Prodx"
        items={this.items}
        onShirtExpand={this.props.onShirtExpand}
      />
    );
  }
}

PopularListContainer.propTypes = {
  onShirtExpand: PropTypes.func,
};

export default PopularListContainer;
