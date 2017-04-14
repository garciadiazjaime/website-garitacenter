/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';

import GaUtilAdapter from '../../../../adapters/gaUtilAdapter';
const style = require('./style.scss');

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
}, {
  id: 3,
  href: '/publicidad',
  tag: 'publicidad',
  title: 'Publicidad',
  isNew: false,
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
