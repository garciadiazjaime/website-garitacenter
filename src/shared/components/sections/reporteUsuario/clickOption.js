import React from 'react';

export default class ClickOption extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { prop, value } = this.props;
    this.props.clickHandler(prop, value);
  }

  render() {
    return (<a onClick={this.clickHandler}>
      {this.props.children}
    </a>);
  }
}

ClickOption.propTypes = {
  children: React.PropTypes.any,
  prop: React.PropTypes.string,
  value: React.PropTypes.string,
  clickHandler: React.PropTypes.func,
};
