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
    this.shirtLists = {
      popular: 1,
      recommended: 2,
    };
  }

  componentWillMount() {
    const { route, params } = this.props;
    const shirtPath = 'shirt/:id';
    if ((route.path && route.path === shirtPath) && params.id) {
      console.warn(`should redirect to shirt ${params.id} page`);
    }
  }

  componentDidMount() {
    const itemsJSON = '/src/data/items.json';
    fetch(itemsJSON).then((resolve) => {
      resolve.json().then((response) => {
        this.onDataReady(response);
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    const { location, route } = nextProps;
    const nextState = _.cloneDeep(this.state);
    const shirtPath = 'shirt/:id';
    if ((route.path && route.path === shirtPath)) {
      // there is some expanded shirt
      nextState.hasExpanded = true;
      nextState.expanded = location.state.expanded;
    } else {
      // nothing else browse
      nextState.hasExpanded = false;
      nextState.expanded = {};
    }
    this.setState(nextState);
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

  render() {
    return (
      <section>
        <PopularListContainer
          data={this.data}
          listId={this.shirtLists.popular}
          expanded={this.state.expanded}
        />
        <RecommendedListContainer
          data={this.data}
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

BrowseView.propTypes = {
  location: PropTypes.object,
  params: PropTypes.object,
  route: PropTypes.object,
};

export default BrowseView;
