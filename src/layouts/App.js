import React, { PropTypes, Component } from 'react';
import _ from 'lodash';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dataReady: false,
      items: {
        hasExpanded: false,
        expanded: {},
      },
    };
    this.data = {};
    this.shirtLists = {
      popular: 1,
      recommended: 2,
    };
  }

  componentWillMount() {
    const { routes, params } = this.props;
    const shirtPath = 'shirt/:id';
    const isShirtRoute = (typeof routes[2] !== 'undefined' &&
      routes[2].path === shirtPath);
    if (isShirtRoute && params.id) {
      this.context.router.push(`/shirt/${params.id}`);
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
    const { location, routes } = nextProps;
    const nextState = _.cloneDeep(this.state);
    const shirtPath = 'shirt/:id';
    const isShirtRoute = (typeof routes[2] !== 'undefined' &&
      routes[2].path === shirtPath);
    if (isShirtRoute) {
      nextState.items.hasExpanded = true;
      nextState.items.expanded = location.state.expanded;
    } else {
      nextState.items.hasExpanded = false;
      nextState.items.expanded = {};
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
    let children = null;
    if (this.state.dataReady) {
      const { data, shirtLists } = this;
      const { items } = this.state;
      children = React.Children.map(this.props.children, (child) =>
        React.cloneElement(child, {
          shirtLists,
          items,
          data,
        }));
    } else {
      children = (
        <h1>
          Loading...
        </h1>
      );
    }
    return (
      <main>
        <h3>PRODX</h3>
        <hr />
        <section
          style={{
            display: 'flex',
            flexFlow: 'column wrap',
            maxWidth: '900px',
            margin: 'auto',
          }}
        >
          {children}
        </section>
      </main>
    );
  }
}

App.contextTypes = {
  router: PropTypes.object,
};

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object,
  params: PropTypes.object,
  routes: PropTypes.array,
};

export default App;
