import React, { PropTypes, Component } from 'react';
import Shirt from './Shirt';

class ShirtList extends Component {
  constructor() {
    super();
    this.state = {
      expandedId: null,
    };
    this.onExpand = this.onExpand.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.items.length &&
      (
        this.state.expandedId !== nextState.expandedId ||
        this.state.expandedId === null
      )
    );
  }

  onExpand(event) {
    const newId = event.currentTarget.dataset.itemId;
    this.setState({
      expandedId: parseInt(newId, 10),
    });
  }

  render() {
    const sectionStyle = {
      display: 'flex',
      'flex-flow': 'column wrap',
      padding: '16px',
    };
    const itemsStyle = {
      display: 'flex',
      'flex-flow': 'row nowrap',
      'justify-content': 'space-between',
      'align-items': 'center',
      padding: 0,
    };
    let itemsInternal = [];

    if (!this.props.items.length) {
      itemsInternal = ['', '', '', '', ''];
    } else {
      itemsInternal = this.props.items;
    }

    return (
      <section style={sectionStyle}>
        <h1>{this.props.title}</h1>
        <ul style={itemsStyle}>
          {
            itemsInternal.map((item) =>
              <Shirt
                item={item}
                clickHandler={this.onExpand}
                isExpanded={(this.state.expandedId === item.id)}
              />
            )
          }
        </ul>
      </section>
    );
  }
}

ShirtList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default ShirtList;
