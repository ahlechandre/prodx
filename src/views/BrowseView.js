import React, { Component, PropTypes } from 'react';
import PopularListContainer from '../containers/PopularListContainer';
import RecommendedListContainer from '../containers/RecommendedListContainer';
import _ from 'lodash';

class BrowseView extends Component {
  constructor() {
    super();
    this.state = {
      dataReady: false,
      hasExpanded: false,
    };
    this.data = {};
    this.onShirtExpand = this.onShirtExpand.bind(this);
  }

  componentDidMount() {
    const itemsJSON = '/src/data/items.json';
    fetch(itemsJSON).then((resolve) => {
      resolve.json().then((response) => {
        this.onDataReady(response);
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.dataReady;
  }

  onDataReady(response) {
    const nextState = _.cloneDeep(this.state);
    nextState.dataReady = true;
    this.data = response;
    this.setState(nextState);
  }

  onShirtExpand(id, event) {
    console.log(id, event);
  }

  render() {
    return (
      <section>
        <PopularListContainer data={this.data} onShirtExpand={this.onShirtExpand} />
        <RecommendedListContainer data={this.data} onShirtExpand={this.onShirtExpand} />
      </section>
    );
  }
}

BrowseView.contextTypes = {
  router: PropTypes.object,
};

export default BrowseView;
