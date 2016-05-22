import React from 'react';
import { Link } from 'react-router';

import SVG from '../../../svg';

const style = require('./style.scss');


export default class MainMenu extends React.Component {

  getItems(data) {
    return data.map((item, index) => {
      const { title, url } = item;
      const elementID = url.replace('/', '');
      const className = style.navbarNavAnchor;
      const { onClick } = this.props;
      return (
        <li key={index}>
          <Link to={url} className={className} id={elementID} onClick={onClick}>{title}</Link>
        </li>
      );
    });
  }

  getIcons(data) {
    return data.map((item, index) => {
      return (<li key={index}>
          <Link to={item.url} className={style.sm_icon} id={item.url} target="_blank">
            <SVG network={item.title} className={style[item.title]}/>
          </Link>
        </li>);
    });
  }

  render() {
    /*eslint-disable */
    return (<nav className={style.navbar + ' navbar navbar-fixed-top'} id="menu_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <Link className={style.navbarBrand + ' navbar-brand'} to="/inicio">
                <img src="/images/garita-center-logo.png" alt="GaritaCenter - reporte de garitas" />
              </Link>
              <h1>Reporte de Garitas</h1>
            </div>
            <div className="col-sm-6 col-xs-12">
              <h2 className="navbar-text navbar-right">Tijuana / San Diego</h2>
            </div>
          </div>
        </div>
      </nav>);
    /*eslint-enable */
  }
}

MainMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  icons: React.PropTypes.array,
  location: React.PropTypes.any,
  onClick: React.PropTypes.func.isRequired,
};
