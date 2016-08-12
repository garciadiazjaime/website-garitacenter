/* eslint max-len: [2, 500, 4] */

import React from 'react';
import { Link } from 'react-router';
const style = require('./style.scss');

export default class MenuReport extends React.Component {

  render() {
    const { location } = this.props;
    const reportLocation = 'reporte-usuario';
    return (<div className="container-fluid">
      <div className={style.mainWrapper}>
        <ul className="nav nav-tabs">
          <li role="presentation" className={location.indexOf(reportLocation) === -1 ? 'active' : ''}>
            <Link to="/">
              Reporte oficial
            </Link>
          </li>
          <li role="presentation" className={location.indexOf(reportLocation) !== -1 ? 'active' : ''}>
            <Link to="/reporte-usuario">
              Reporte de usuarios
            </Link>
          </li>
        </ul>
      </div>
    </div>);
  }
}

MenuReport.propTypes = {
  location: React.PropTypes.string.isRequired,
};
