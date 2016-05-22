import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Loader from '../../../elements/loader';


export default class Block2 extends React.Component {

  constructor(args) {
    super(args);
    this.state = {
      showLoader: true,
    };
  }

  componentDidMount() {
    /*eslint-disable */
    // setTimeOut(() => {
    //   console.log('here');
      this.setState({
        showLoader: false,
      });
    // }, 2000, this);
    /*eslint-enable */
  }

  renderAds() {
    return (<div className="col-xs-12">
      <h4>Reporte de Garitas <small>patrocinado por</small></h4>
    </div>);
  }

  render() {
    return (<div className="container-fluid">
      <div className={style.wrapper1 + ' row ' + style.wrapperBlock1}>
        { this.state.showLoader ? <Loader /> : this.renderAds() }
      </div>
    </div>);
  }
}
