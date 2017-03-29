/* eslint max-len: [2, 500, 4] */
import React from 'react';
import GaUtilAdapter from '../../../../adapters/gaUtilAdapter';
const style = require('./style.scss');

export default class MenuCities extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    GaUtilAdapter.sendEvent('click', 'city_menu', !this.state.showMenu);
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  clickCityHandler(e) {
    const city = e.currentTarget.getAttribute('data-city');
    GaUtilAdapter.sendEvent('click', 'city_report', city);
  }

  render() {
    return (<div>
      <div className={style.menuControl} onClick={this.clickHandler}>
        <span className={style.hamburgerBar}></span>
        <span className={style.hamburgerBar}></span>
      </div>
      {
        this.state.showMenu ? <div className={style.citiesList}>
          <ul>
            <li onClick={this.clickCityHandler} data-city="tijuana">Tijuana</li>
            <li onClick={this.clickCityHandler} data-city="mexicali">Mexicali</li>
            <li onClick={this.clickCityHandler} data-city="tecate">Tecate</li>
          </ul>
        </div> : null
      }
    </div>);
  }
}
