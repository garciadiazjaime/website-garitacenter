/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';

const style = require('./style.scss');
import Powered from './powered';
import SVG from '../../../svg';

export default class FooterAAA extends React.Component {

  getIcons(data) {
    return data.map((item, index) => {
      return (<div key={index} className="col-xs-3 col-sm-12 col-md-4">
          <Link to={item.url} className={style.sm_icon} id={item.url} target="_blank">
            <SVG network={item.title} className={style[item.title]}/>
          </Link>
        </div>);
    });
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
              <small>El reporte de gartias de GaritaCenter es extraido de CBP. <br />
              Los datos contenidos en este sitio son de carácter informativo.</small>
            </p>
          </div>
          <div className="col-xs-12 col-sm-4">
            Amigos de GaritaCenter en Tijuana
            <ul className={style.list}>
              <li>
                <a href="http://www.hoytoca.me/" title="Hoy Toca Me" target="_blank">Educación Sexual</a>
              </li>
              <li>
                <a href="http://www.playami.com/" title="Directorio Playas de Tijuana" target="_blank">Directorio Playas de Tijuana</a>
              </li>
              <li>
                <a href="http://ciudadtijuana.info/" title="Ciudad Tijuana" target="_blank">Ciudad Tijuana</a>
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
  items: React.PropTypes.array.isRequired,
  addresses: React.PropTypes.array,
  icons: React.PropTypes.array,
};
