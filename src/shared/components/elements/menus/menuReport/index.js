import React from 'react';
import { Link } from 'react-router';

export default class MenuReport extends React.Component {

  render() {
    return (
      <ul className="nav nav-tabs">
        <li role="presentation" className="active">
          <Link to="/">
            Reporte oficial
          </Link>
        </li>
        <li role="presentation">
          <Link to="/reporte-usuario">
            Reporte de usuarios
          </Link>
        </li>
      </ul>
    );
  }
}
