/* eslint max-len: [2, 500, 4] */
import React from 'react';
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
    this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  render() {
    return (<div>
      <div className={style.menuControl} onClick={this.clickHandler}>
        <i className="glyphicon glyphicon-menu-hamburger" />
      </div>
      {
        this.state.showMenu ? <div className={style.citiesList}>
          <ul>
            <li>Tijuana</li>
            <li>Mexicali</li>
            <li>Tecate</li>
          </ul>
        </div> : null
      }
    </div>);
  }
}
