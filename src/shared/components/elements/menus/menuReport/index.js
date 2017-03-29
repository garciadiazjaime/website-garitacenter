/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';

import GaUtilAdapter from '../../../../adapters/gaUtilAdapter';
const style = require('./style.scss');

function clickHandler(e) {
  const item = e.target.getAttribute('data-item');
  GaUtilAdapter.sendEvent('mainmenu', 'click', item);
}

export default ({ location }) => {
  const defaultLocation = '/';
  return (<div className={style.mainWrapper}>
    <div className="container-fluid">
      <ul className="nav nav-tabs">
        <li role="presentation" className={location === defaultLocation ? 'active' : ''}>
          <Link to="/" onClick={clickHandler} data-item="homepage">Reporte Oficial</Link>
        </li>
        <li role="presentation" className={location !== defaultLocation ? 'active' : ''}>
          <Link to="/reporte-usuario" onClick={clickHandler} data-item="reporte-usuario">
            Reporte Usuarios
            <span className={style.notification}>new</span>
          </Link>
        </li>
      </ul>
    </div>
  </div>);
};
