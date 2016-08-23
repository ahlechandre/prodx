import React, { Component, PropTypes } from 'react';
import ShirtList from '../presenters/ShirtList';

class RecommendedListContainer extends Component {
  constructor() {
    super();
    this.items = [];
  }

  // component lifecycle

  shouldComponentUpdate(nextProps) {
    return (typeof nextProps.data.recommendeds !== 'undefined');
  }

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
    return (<ShirtList title="Recommended for you" items={this.items} />);
  }
}

RecommendedListContainer.propTypes = {
  data: PropTypes.object,
};

export default RecommendedListContainer;
