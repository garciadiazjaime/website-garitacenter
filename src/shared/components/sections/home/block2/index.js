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
        <a href="http://www.anrdoezrs.net/click-8412859-13074197" target="_top">
          <img src="http://www.awltovhc.com/image-8412859-13074197" width="320" height="100" alt="Free Blade Runner Funko POP!" border="0"/>
        </a>
      </div>
    </div>) : null;
  }
}
