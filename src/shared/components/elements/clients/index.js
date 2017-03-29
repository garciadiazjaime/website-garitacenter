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
    this.clients = [{
      id: 'nutrirte',
      title: 'Nutrirte: cambia tu vida HOY',
      image: 'nutrirte.gif',
      link: 'https://www.facebook.com/Nutrirte-281465582043299/',
      ends: '2017-05-30',
      status: true,
    },
    {
      id: 'sano',
      title: 'Sano y Punto',
      image: 'sano-y-punto.gif',
      link: 'http://www.sanoypunto.com/',
      ends: '2017-05-30',
      status: true,
    },
    {
      id: 'smile',
      title: 'Smile Dent',
      image: 'smile-dent.gif',
      link: 'https://www.facebook.com/smiledenttijuana',
      ends: '2017-05-30',
      status: true,
    },
    {
      id: 'garden',
      title: 'Garden Spa',
      image: 'garden-spa.gif',
      link: 'https://www.facebook.com/thegardenspa',
      ends: '2017-05-30',
      status: true,
    },
    {
      id: 'Mayco',
      title: 'Mayco Limpiadur&iacute;a',
      image: 'mayco.gif',
      link: 'https://www.facebook.com/maycolimpiaduria/',
      ends: '2017-05-30',
      status: true,
    },
    {
      id: 'ri',
      title: 'Relaciones Inesperadas',
      image: 'ri.gif',
      link: 'https://www.facebook.com/RelacionesInesperadas/',
      ends: '2017-05-30',
      status: true,
    },
    {
      id: 'torrente',
      title: 'Torrente',
      image: 'torrente.gif',
      link: 'https://www.facebook.com/TorrenteTJ/',
      ends: '2017-05-30',
      status: true,
    },
    {
      id: 'club54',
      title: 'Club 54',
      image: 'club54.gif',
      link: 'https://www.facebook.com/club54grados/',
      ends: '2017-05-30',
      status: true,
    },
    {
      id: 'kids',
      title: 'Kids Dent',
      image: 'kids-dent.gif',
      link: 'https://www.facebook.com/kidsdent.tijuana/',
      ends: '2017-04-30',
      status: true,
    },
    {
      id: 'electric',
      title: 'Electric Coffee Roasters',
      image: 'electric.gif',
      link: 'https://www.facebook.com/ElectricCoffeeRoasters/',
      ends: '2017-03-30',
      status: true,
    },
    {
      id: 'hola',
      title: 'Hola Bonita',
      image: 'hola-bonita.gif',
      link: 'http://holabonita.com.mx/',
      ends: '2017-03-30',
      status: true,
    }];
  }

  componentDidMount() {
    /*eslint-disable */
    this.setState({
      showClient: true,
    });
    /*eslint-enable */
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
    const url = e.currentTarget.getAttribute('data-url');
    GaUtilAdapter.sendEvent('client', 'click', item);
    e.preventDefault();
    window.open(url, '_blank');
  }

  isClientActive(data) {
    const expiresOn = new Date(data.ends);
    const today = new Date();
    return today < expiresOn;
  }

  renderClient() {
    const activeClients = this.getActiveClients(this.clients);
    if (_.isArray(activeClients) && activeClients.length) {
      const index = Math.floor(Math.random() * activeClients.length);
      const client = activeClients[index];
      if (client) {
        GaUtilAdapter.sendEvent('client', 'show', client.id);
        return (<div>
          <a href={client.link} title={client.title} onClick={this.clickHandler} data-item={client.id} data-url={client.link}>
            <img src={`/images/clients/` + client.image } />
          </a>
        </div>);
      }
    }
    return null;
  }

  render() {
    return this.state.showClient ? (<div className={style.client}>
      { this.renderClient() }
    </div>) : null;
  }
}
