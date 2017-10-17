/* eslint max-len: [2, 500, 4] */
import React, { Component } from 'react';

import Gads from '../../../elements/gads';

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
        <Gads client="ca-pub-2643588035417760" slot="8391964998" />
      </div>
    </div>) : null;
  }
}
