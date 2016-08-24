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
      expanded: {},
    };
    this.data = {};
    this.onShirtExpand = this.onShirtExpand.bind(this);
    this.shirtLists = {
      popular: 1,
      recommended: 2,
    };
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

  onShirtExpand(listId, shirtId, isExpanded) {
    const nextState = _.cloneDeep(this.state);
    nextState.hasExpanded = !isExpanded;
    nextState.expanded = isExpanded ? {} : {
      listId,
      shirtId,
    };
    this.setState(nextState);
  }

  render() {
    return (
      <section>
        <PopularListContainer
          data={this.data}
          onShirtExpand={this.onShirtExpand}
          listId={this.shirtLists.popular}
          expanded={this.state.expanded}
        />
        <RecommendedListContainer
          data={this.data}
          onShirtExpand={this.onShirtExpand}
          listId={this.shirtLists.recommended}
          expanded={this.state.expanded}
        />
      </section>
    );
  }
}

BrowseView.contextTypes = {
  router: PropTypes.object,
};

export default BrowseView;
