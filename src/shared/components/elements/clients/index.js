/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

const style = require('./style.scss');

export default class Client extends React.Component {

  constructor() {
    super();
    this.state = {
      showClient: false,
    };
    this.isSectionEnable = false;
    this.clients = [{
      image: 'club54.gif',
      link: 'http://www.playami.com/',
      title: 'club54',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'electric.gif',
      link: 'http://www.playami.com/',
      title: 'electric',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'garden-spa.gif',
      link: 'http://www.playami.com/',
      title: 'garden-spa',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'hola-bonita.gif',
      link: 'http://www.playami.com/',
      title: 'hola-bonita',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'kids-dent.gif',
      link: 'http://www.playami.com/',
      title: 'kids-dent',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'mayco.gif',
      link: 'http://www.playami.com/',
      title: 'mayco',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'nutrirte.gif',
      link: 'https://www.facebook.com/nutrirte',
      title: 'Nutrirte: Cambia tu vida HOY',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'ri.gif',
      link: 'http://www.playami.com/',
      title: 'ri',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'sano-y-punto.gif',
      link: 'http://www.playami.com/',
      title: 'sano-y-punto',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'smile-dent.gif',
      link: 'http://www.playami.com/',
      title: 'smile-dent',
      ends: '2017-01-31',
      status: true,
    }, {
      image: 'torrente.gif',
      link: 'http://www.playami.com/',
      title: 'torrente',
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
        return (<div>
          <a href={client.link} title={client.title} target="_blank">
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
