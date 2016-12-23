/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import GaUtilAdapter from '../../../adapters/gaUtilAdapter';
const style = require('./style.scss');

export default class Client extends React.Component {

  constructor() {
    super();
    this.state = {
      showClient: false,
    };
    this.isSectionEnable = false;
    this.clients = [{
      id: 'club54',
      title: 'club54',
      image: 'club54.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'electric',
      title: 'electric',
      image: 'electric.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'garden-spa',
      title: 'garden-spa',
      image: 'garden-spa.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'hola-bonita',
      title: 'hola-bonita',
      image: 'hola-bonita.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'kids-dent',
      title: 'kids-dent',
      image: 'kids-dent.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'mayco',
      title: 'mayco',
      image: 'mayco.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'nutrirte',
      title: 'nutrirte',
      image: 'nutrirte.gif',
      link: 'https://www.facebook.com/nutrirte',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'ri',
      title: 'ri',
      image: 'ri.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'sano-y-punto',
      title: 'sano-y-punto',
      image: 'sano-y-punto.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'smile-dent',
      title: 'smile-dent',
      image: 'smile-dent.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }, {
      id: 'torrente',
      title: 'torrente',
      image: 'torrente.gif',
      link: 'http://www.playami.com/',
      ends: '2017-01-31',
      status: true,
    }];
  }

  componentDidMount() {
    if (this.isSectionEnable) {
      /*eslint-disable */
      this.setState({
        showClient: true,
      });
      /*eslint-enable */
    }
  }

  getActiveClients(data) {
    if (_.isArray(data) && data.length) {
      return data.filter((item) => {
        return item.status && this.isClientActive(item);
      });
    }
  }

  clickHandler(e) {
    const item = e.currentTarget.getAttribute('data-item');
    GaUtilAdapter.sendEvent('client', 'click', item);
  }

  isClientActive(data) {
    const expiresOn = new Date(data.ends);
    const today = new Date();
    return today < expiresOn;
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  renderClient() {
    const activeClients = this.getActiveClients(this.clients);
    if (_.isArray(activeClients) && activeClients.length) {
      const index = Math.floor(Math.random() * activeClients.length);
      const client = activeClients[index];
      if (client) {
        GaUtilAdapter.sendEvent('client', 'show', client.id);
        return (<div>
          <a href={client.link} title={client.title} target="_blank" onClick={this.clickHandler} data-item={client.id}>
            <img src={`/images/clients/` + client.image } />
          </a>
        </div>);
      }
    }
    return null;
  }

  render() {
    return this.isSectionEnable && !this.isMobile() ? (<div className={style.client}>
      { this.state.showClient ? this.renderClient() : null }
    </div>) : null;
  }
}
