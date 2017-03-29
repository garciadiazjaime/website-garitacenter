import React from 'react';
import 'react-fastclick';

export default class ClickOption extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    const { value } = this.props;
    this.props.clickHandler(value);
  }

  render() {
    const { className } = this.props;
    return (<a onClick={this.clickHandler} className={className || ''} href="#" rel="nofollow">
      {this.props.children}
    </a>);
  }
}

ClickOption.propTypes = {
  children: React.PropTypes.any.isRequired,
  value: React.PropTypes.string.isRequired,
  clickHandler: React.PropTypes.func.isRequired,
  className: React.PropTypes.string,
};
