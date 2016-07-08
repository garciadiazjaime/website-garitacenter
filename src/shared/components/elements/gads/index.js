/* eslint max-len: [2, 500, 4] */
import React from 'react';

const style = require('./style.scss');

export default class Gads extends React.Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (<ins className="adsbygoogle" className={style.ads} data-ad-client={this.props.client} data-ad-slot={this.props.slot} data-ad-format="auto" />);
  }
}

Gads.propTypes = {
  client: React.PropTypes.string.isRequired,
  slot: React.PropTypes.string.isRequired,
};
