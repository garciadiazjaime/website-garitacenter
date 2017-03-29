import React from 'react';
import { Link } from 'react-router';
const style = require('./style.scss');

export default class Header extends React.Component {

  render() {
    return (<nav className={style.navbar + ' navbar'} id="menu_wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-5 col-xs-10">
              <Link className={style.navbarBrand + ' navbar-brand'} to="/">
                <img src="/images/garita-center-logo.png" alt="GaritaCenter - Reporte de Garitas" />
              </Link>
              <h1>Reporte de Garitas</h1>
            </div>
            <div className="col-sm-5 col-xs-10">
              <h2 className={'navbar-text navbar-right'}>{this.props.city}</h2>
            </div>
          </div>
        </div>
      </nav>);
  }
}

Header.propTypes = {
  city: React.PropTypes.string,
};
