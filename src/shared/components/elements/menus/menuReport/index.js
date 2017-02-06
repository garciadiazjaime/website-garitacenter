/* eslint max-len: [2, 500, 4] */

import React from 'react';
import { Link } from 'react-router';
const style = require('./style.scss');

<<<<<<< HEAD
const menuItems = [{
  id: 1,
  href: '/',
  tag: 'homepage',
  title: 'Reporte Oficial',
  isNew: false,
}, {
  id: 2,
  href: '/reporte-usuario',
  tag: 'reporte-usuario',
  title: 'Reporte Usuarios',
  isNew: true,
}];


function clickHandler(e) {
  const item = e.target.getAttribute('data-item');
  GaUtilAdapter.sendEvent('mainmenu', 'click', item);
}

function renderMenu(data, location) {
  return data.map(item => {
    const className = location === item.href ? 'active' : null;
    return (<li role="presentation" className={className} key={item.id}>
      <Link to={item.href} onClick={clickHandler} data-item={item.tag}>{item.title}</Link>
      { item.isNew ? <span className={style.notification}>nuevo</span> : null }
    </li>);
  });
=======
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
>>>>>>> client information
}

export default ({ location }) => {
  const menuEl = renderMenu(menuItems, location);
  return (<div className={style.mainWrapper}>
    <div className="container-fluid">
      <ul className="nav nav-tabs">
        {menuEl}
      </ul>
    </div>
  </div>);
};
