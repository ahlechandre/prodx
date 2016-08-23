import React, { Component } from 'react';
import ShirtList from '../presenters/ShirtList';

class PopularListContainer extends Component {
  constructor() {
    super();
    this.items = [];
  }

  // component lifecycle
  shouldComponentUpdate(nextProps) {
    return (typeof nextProps.data.shirts !== 'undefined');
  }

  componentWillUpdate(nextProps) {
    const { shirts } = nextProps.data;
    this.items = shirts.sort((back, front) => (front.views - back.views));
  }

  render() {
    return (<ShirtList title="Popular on Prodx" items={this.items} />);
  }
}

export default PopularListContainer;
