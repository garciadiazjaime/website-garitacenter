/* eslint max-len: [2, 500, 4] */

import React from 'react';
import { Link } from 'react-router';
const style = require('./style.scss');

export default function MenuReport({ location }) {
  const reportLocation = 'reporte-usuario';
  return (<div className={style.mainWrapper}>
    <div className="container-fluid">
      <ul className="nav nav-tabs">
        <li role="presentation" className={location.indexOf(reportLocation) === -1 ? 'active' : ''}>
          <Link to="/">Reporte Oficial</Link>
        </li>
        <li role="presentation" className={location.indexOf(reportLocation) !== -1 ? 'active' : ''}>
          <Link to="/reporte-usuario">Reporte Usuarios</Link>
        </li>
      </ul>
    </div>
  </div>);
}

MenuReport.propTypes = {
  location: React.PropTypes.string.isRequired,
};
