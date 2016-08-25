import React from 'react';
import { Link } from 'react-router';

class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      clickedAbout: false,
    };
  }

  render() {
    // const { children, params, location } = this.props;
    // const { router } = this.context;
    // console.log(router.isActive('/'));
    const { children } = this.props;
    const styleActive = {
      fontWeight: 'bold',
    };
    return (
      <main>
        <header>
          <p>Header</p>
          <ul>
            <li>
              <Link
                to="/"
                activeStyle={styleActive}
                activeClassName="is-active"
                onlyActiveOnIndex
              >Home</Link>
            </li>
            <li>
              <Link
                activeStyle={styleActive}
                to="/about"
                activeClassName="is-active"
                onClick={() => {
                  this.setState({
                    clickedAbout: true,
                  });
                }}
              >About</Link>
            </li>
            <li>
              <Link
                activeStyle={styleActive}
                to="/items"
                activeClassName="is-active"
              >Items</Link></li>
          </ul>
        </header>
        <section>
          {children}
        </section>
        <footer>
          <p>Footer</p>
        </footer>
      </main>
    );
  }
}

Layout.contextTypes = {
  router: React.PropTypes.object,
};

Layout.propTypes = {
  children: React.PropTypes.node,
  params: React.PropTypes.object,
  location: React.PropTypes.object,
  history: React.PropTypes.object,
};

export default Layout;
