/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';

import GaUtilAdapter from '../../../../adapters/gaUtilAdapter';
const style = require('./style.scss');


export default class MenuReport extends React.Component {

  clickHandler(e) {
    const item = e.target.getAttribute('data-item');
    GaUtilAdapter.sendEvent('mainmenu', 'click', item);
  }

  render() {
    const { location } = this.props;
    const reportLocation = 'reporte-usuario';
    return (<div className={style.mainWrapper}>
      <div className="container-fluid">
        <ul className="nav nav-tabs">
          <li role="presentation" className={location.indexOf(reportLocation) === -1 ? 'active' : ''}>
            <Link to="/" onClick={this.clickHandler} data-item="homepage">Reporte Oficial</Link>
          </li>
          <li role="presentation" className={location.indexOf(reportLocation) !== -1 ? 'active' : ''}>
            <Link to="/reporte-usuario" onClick={this.clickHandler} data-item="reporte-usuario">
              Reporte Usuarios
              <span className={style.notification}>new</span>
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
