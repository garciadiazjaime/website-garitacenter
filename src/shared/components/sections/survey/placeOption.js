/* eslint max-len: [2, 500, 4] */

import React from 'react';
import ClickOption from './clickOption';

export default class PlaceOption extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(value) {
    this.props.clickHandler(value);
  }

  renderItems(data, btnClassName) {
    if (data.constructor === Array && data.length) {
      return data.map((item, index) => {
        return (<ClickOption className={btnClassName} value={item} clickHandler={this.clickHandler} key={index}>
          {item}
        </ClickOption>);
      });
    }
    return null;
  }

  render() {
    const { data, btnClassName } = this.props;
    return (<div className="row">
      <div className="col-xs-12">
        { this.renderItems(data, btnClassName)}
      </div>
    </div>);
  }
}

PlaceOption.propTypes = {
  data: React.PropTypes.array.isRequired,
  btnClassName: React.PropTypes.string,
  clickHandler: React.PropTypes.func.isRequired,
};
