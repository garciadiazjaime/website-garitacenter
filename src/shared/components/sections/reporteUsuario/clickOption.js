import React from 'react';

export default class ClickOption extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { prop, value, index } = this.props;
    this.props.clickHandler(prop, value, index);
  }

  render() {
    return (<a onClick={this.clickHandler}>
      {this.props.children}
    </a>);
  }
}

ClickOption.propTypes = {
  children: React.PropTypes.any.isRequired,
  prop: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  index: React.PropTypes.number,
  clickHandler: React.PropTypes.func.isRequired,
};
