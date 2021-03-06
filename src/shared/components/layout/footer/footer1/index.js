/* eslint max-len: [2, 500, 4] */
import React from 'react';

import GaUtilAdapter from '../../../../adapters/gaUtilAdapter';
import Powered from './powered';
import SVG from '../../../svg';
const style = require('./style.scss');

export default class FooterAAA extends React.Component {

  getIcons(data) {
    return data.map((item, index) => {
      return (<div key={index} className="col-xs-3 col-sm-12 col-md-4">
          <a href={item.url} className={style.sm_icon} id={item.url} target="_blank" onClick={this.clickHandler} data-item={item.title}>
            <SVG network={item.title} className={style[item.title]} />
          </a>
        </div>);
    });
  }

  clickHandler(e) {
    const item = e.currentTarget.getAttribute('data-item');
    GaUtilAdapter.sendEvent('footer', 'click', item);
  }

  render() {
    return (<div className={style.footerWrapper}>
      <div className={'container-fluid ' + style.container}>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <p>
              <strong>GaritaCenter</strong> Es un servicio web con el objetivo de brindar
              el reporte de garitas entre México (Tijuana) y Estados Unidos (San Diego),
              en un formato amigable.
            </p>
            <p>
              En <strong>GaritaCenter</strong> nos interesa tu opinión, si eres de Tijuana y cruzas seguido,
              mándanos un mensaje sobre cómo podemos mejorar el reporte de garitas.
            </p>
            <p>
              <small>El reporte de garitas de GaritaCenter es extraido de CBP. Los datos
              contenidos en este sitio son de carácter informativo.</small>
            </p>
          </div>
          <div className="col-xs-12 col-sm-4">
            Amigos de GaritaCenter en Tijuana
            <ul className={style.list}>
              <li>
                <a href="http://www.playami.com/" title="Directorio Playas de Tijuana" target="_blank" onClick={this.clickHandler} data-item="playami">
                  Directorio Playas de Tijuana
                </a>
              </li>
              <li>
                <a href="http://www.somospool.com" title="somos pool" target="_blank" onClick={this.clickHandler} data-item="somospool">
                  POOL
                </a>
              </li>
            </ul>
            <br />
          </div>
          <div className="col-xs-12 col-sm-2">
            <div className="row">
              {this.getIcons(this.props.icons)}
            </div>
          </div>
        </div>
      </div>
      <Powered />
    </div>);
  }
}

FooterAAA.propTypes = {
  icons: React.PropTypes.array,
};
