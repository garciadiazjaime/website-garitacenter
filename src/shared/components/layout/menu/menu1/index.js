import React from 'react';
import { Link } from 'react-router';
const style = require('./style.scss');

export default function MainMenu({ city }) {
  return (<nav className={style.navbar + ' navbar'} id="menu_wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-xs-12">
          <Link className={style.navbarBrand + ' navbar-brand'} to="/">
            <img src="/images/garita-center-logo.png" alt="GaritaCenter - reporte de garitas" />
          </Link>
          <h1>Reporte de Garitas</h1>
        </div>
        <div className="col-sm-6 col-xs-12">
          <h2 className={'navbar-text navbar-right'}>{city}</h2>
        </div>
      </div>
    </div>
  </nav>);
}
