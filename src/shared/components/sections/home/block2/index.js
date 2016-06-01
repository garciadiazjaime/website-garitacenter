import React from 'react';

const style = require('./style.scss');
import Loader from '../../../elements/loader';
window.adsbygoogle = [];

export default class Block2 extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      showLoader: true,
    };
  }

  componentDidMount() {
    /*eslint-disable */
    this.setState({
      showLoader: false,
    });
    /*eslint-enable */
  }

  getAds() {
    /*eslint-disable */
    window.adsbygoogle.push({});
    return (<ins className="adsbygoogle" style={{ display: 'block' }} data-ad-client="ca-pub-2643588035417760" data-ad-slot="9117540736" data-ad-format="auto" />);
    /*eslint-enable */
  }

  render() {
    return (<div className="container-fluid">
      <div className="row"><hr /></div>
      <h4>Reporte de Garitas <small>patrocinado por</small></h4>
      <div className={'row ' + style.ads}>
        { this.state.showLoader ? <Loader /> : this.getAds() }
      </div>
    </div>);
  }
}
