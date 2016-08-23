import React, { Component } from 'react';
import PopularListContainer from '../containers/PopularListContainer';
import RecommendedListContainer from '../containers/RecommendedListContainer';

class BrowseView extends Component {
  constructor() {
    super();
    this.state = {
      dataReady: false,
    };
    this.data = {};
  }

  // component lifecycle

  componentDidMount() {
    const itemsJSON = './src/data/items.json';
    fetch(itemsJSON).then((resolve) => {
      resolve.json().then((response) => {
        this.data = response;
        this.setState({
          dataReady: true,
        });
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.dataReady;
  }

  render() {
    return (
      <section>
        <PopularListContainer data={this.data} />
        <RecommendedListContainer data={this.data} />
      </section>
    );
  }
}

export default BrowseView;
