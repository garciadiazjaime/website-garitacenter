/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import ClickOption from './clickOption';
import { toTitleCase } from '../../../utils/string';
import RequestUtil from '../../../utils/requestUtil';

export default class FormReporteUsuario extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {};
  }

  getLabel(prop) {
    if (prop === 'port') {
      return !_.isEmpty(this.state.port) ? toTitleCase(this.state.port) : 'Seleccionar Garita';
    } else if (prop === 'place') {
      return !_.isEmpty(this.state.place) ? toTitleCase(this.state.place) : 'Seleccionar Lugar';
    } else if (prop === 'time') {
      return !_.isEmpty(this.state.time) ? toTitleCase(this.state.time) : 'Seleccionar Tiempo';
    }
    return '';
  }

  submitHandler() {
    const data = this.state;
    const url = '/user/report';
    RequestUtil.post(url, data)
      .then((results) => {
        console.log('results', results);
      });
  }

  clickHandler(option, value) {
    const state = _.assign({}, this.state);
    state[option] = value;
    this.setState(state);
  }

  render() {
    return (<div className="container-fluid">
      <h1>Reporte de Usuario</h1>
      <p>
        Ayúdanos a mejorar el reporte, si te encuentras haciendo la línea,
        favor de llenar la siguiente forma.
      </p>
      <div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Qué Garita?</label>
          <br />
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.getLabel('port')} <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
            <li><ClickOption prop="port" value="san_ysidro" clickHandler={this.clickHandler}>San Ysidro</ClickOption></li>
            <li><ClickOption prop="port" value="otay" clickHandler={this.clickHandler}>Otay</ClickOption></li>
            </ul>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Dónde estas?</label>
          <br />
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.getLabel('place')} <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><ClickOption prop="place" value="place_a" clickHandler={this.clickHandler}>Place A</ClickOption></li>
              <li><ClickOption prop="place" value="place_b" clickHandler={this.clickHandler}>Place B</ClickOption></li>
              <li><ClickOption prop="place" value="place_c" clickHandler={this.clickHandler}>Place C</ClickOption></li>
              <li><ClickOption prop="place" value="place_d" clickHandler={this.clickHandler}>Place D</ClickOption></li>
              <li><ClickOption prop="place" value="place_e" clickHandler={this.clickHandler}>Place E</ClickOption></li>
            </ul>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Cuánto tiempo llevas?</label>
          <br />
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.getLabel('time')} <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
            <li><ClickOption prop="time" value="time_a" clickHandler={this.clickHandler}>Tiempo A</ClickOption></li>
            <li><ClickOption prop="time" value="time_b" clickHandler={this.clickHandler}>Tiempo B</ClickOption></li>
            <li><ClickOption prop="time" value="time_c" clickHandler={this.clickHandler}>Tiempo C</ClickOption></li>
            <li><ClickOption prop="time" value="time_d" clickHandler={this.clickHandler}>Tiempo D</ClickOption></li>
            <li><ClickOption prop="time" value="time_e" clickHandler={this.clickHandler}>Tiempo E</ClickOption></li>
            </ul>
          </div>
        </div>
        <button className="btn btn-default" onClick={this.submitHandler}>Submit</button>
      </div>
    </div>);
  }
}
