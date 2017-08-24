/* eslint max-len: [2, 500, 4] */
import React, { Component } from 'react';

const style = require('./style.scss');

export default class Block2 extends Component {

  constructor(args) {
    super(args);
    this.state = {
      show: false,
    };
  }

  componentDidMount() {
    /*eslint-disable */
    this.setState({
      show: true,
    });
    /*eslint-enable */
  }

  render() {
    const { show } = this.state;
    return show ? (<div className="container-fluid text-center">
      <div className={'row ' + style.donuts}>
        <a href="http://www.tkqlhce.com/click-8412859-12855029" target="_blank">
          <img src="http://www.tqlkg.com/image-8412859-12855029" width="320" height="50" alt="" border="0"/>
        </a>
      </div>
    </div>) : null;
  }
}
