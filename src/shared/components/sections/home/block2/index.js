/* eslint max-len: [2, 500, 4] */
import React from 'react';

const style = require('./style.scss');
// import Loader from '../../../elements/loader';
import Gads from '../../../elements/gads';

export default class Block2 extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      showLoader: true,
    };
  }

  componentDidMount() {
    // window.adsbygoogle = [];
    /*eslint-disable */
    // this.setState({
    //   showLoader: false,
    // });
    /*eslint-enable */
  }

  render() {
    // { this.state.showLoader ? <Loader /> : <Gads client="ca-pub-2643588035417760" slot="9117540736" /> }
    return (<div className="container-fluid">
      <div className={'row ' + style.ads}>
        <Gads client="ca-pub-2643588035417760" slot="9117540736" />
      </div>
    </div>);
  }
}
