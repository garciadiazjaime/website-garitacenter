/* eslint max-len: [2, 500, 4] */
import React from 'react';

export default class Gads extends React.Component {

  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (<ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client={this.props.client} data-ad-slot={this.props.slot} data-ad-format="auto" />);
  }
}

Gads.propTypes = {
  client: React.PropTypes.string.isRequired,
  slot: React.PropTypes.string.isRequired,
};
