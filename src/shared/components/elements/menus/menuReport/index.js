/* eslint max-len: [2, 500, 4] */

import React from 'react';
import { Link } from 'react-router';
const style = require('./style.scss');

export default class MenuReport extends React.Component {

  render() {
    const { location } = this.props;
    const reportLocation = 'reporte-usuario';
    return (<div className={style.mainWrapper}>
      <div className="container-fluid">
        <ul className="nav nav-tabs">
          <li role="presentation" className={location.indexOf(reportLocation) === -1 ? 'active' : ''}>
            <Link to="/">
              Reporte Oficial
            </Link>
          </li>
          <li role="presentation" className={location.indexOf(reportLocation) !== -1 ? 'active' : ''}>
            <Link to="/reporte-usuario">
              Reporte Usuarios
            </Link>
            <a className={style.notification}>99</a>
          </li>
        </ul>
      </div>
    </div>);
  }
}

MenuReport.propTypes = {
  location: React.PropTypes.string.isRequired,
};
