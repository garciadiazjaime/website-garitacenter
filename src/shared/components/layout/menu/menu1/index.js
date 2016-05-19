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
    return (<div className={style.navbarWrapper}>
      <nav className={style.navbarDefault + ' navbar navbar navbar-fixed-top'} id="menu_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className={style.navbarHeader + ' navbar-header'}>
              <Link className={style.navbarBrand + ' navbar-brand'} to="/inicio" />
              <h1>Reporte de Garitas</h1>
              <h2>Tijuana y San Diego (San Ysidro y Otay)</h2>
            </div>
          </div>
        </div>
      </nav>
    </div>);
    /*eslint-enable */
  }
}

MainMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  icons: React.PropTypes.array,
  location: React.PropTypes.any,
  onClick: React.PropTypes.func.isRequired,
};
