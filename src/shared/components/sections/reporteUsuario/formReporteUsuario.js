/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import Loader from '../../elements/loader';
import ClickOption from './clickOption';
import { toTitleCase } from '../../../utils/string';
import RequestUtil from '../../../utils/requestUtil';
import refData from './portsData.js';

export default class FormReporteUsuario extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.renderPlaces = this.renderPlaces.bind(this);
    this.state = {
      showLoading: false,
    };
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
    const promise = [];
    let message = 'Favor de llenar todos los campos.';
    if (data && data.port && data.place && data.time) {
      delete data.formMessage;
      this.setState(_.assign({}, this.state, {
        showLoading: true,
      }));
      promise.push(RequestUtil.post(url, data));
    }

    Promise.all(promise).then((results) => {
      if (results.length) {
        message = results[0].status ? 'Gracias por el dato.' : 'Lo sentimos, favor de intentar más tarde.';
      }
      this.setState({
        formMessage: message,
        showLoading: false,
      });
    }, () => {
      this.setState({
        formMessage: 'Lo sentimos, favor de intentar más tarde.',
        showLoading: false,
      });
    });
  }

  clickHandler(option, value, portIndex) {
    const state = _.assign({}, this.state);
    state[option] = value;
    if (option === 'port') {
      state.portIndex = portIndex;
      state.place = '';
      state.time = '';
    }
    this.setState(state);
  }

  renderPorts() {
    return refData.map((port, index) => {
      return (<li key={index}><ClickOption prop="port" value={port.id} index={index} clickHandler={this.clickHandler}>{port.title}</ClickOption></li>);
    });
  }

  renderPlaces() {
    return this.state.port ? refData[this.state.portIndex].places.map((place, index) => {
      return (<li key={index}><ClickOption prop="place" value={place.id} clickHandler={this.clickHandler}>{place.title}</ClickOption></li>);
    }) : null;
  }

  renderTimes() {
    return this.state.port ? refData[this.state.portIndex].times.map((time, index) => {
      return (<li key={index}><ClickOption prop="time" value={time.id} clickHandler={this.clickHandler}>{time.title}</ClickOption></li>);
    }) : null;
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
          <label htmlFor="exampleInputEmail1">¿Por dónde cruzas?</label>
          <br />
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {this.getLabel('port')} <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              {this.renderPorts()}
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
              {this.renderPlaces()}
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
              {this.renderTimes()}
            </ul>
          </div>
        </div>
      </div>
      <div className="form-group">
        <button className="btn btn-default" onClick={this.submitHandler}>Submit</button>
      </div>
      <div className="form-group">
        <span className="text-danger">{this.state.formMessage}</span>
      </div>
      { this.state.showLoading ? <Loader /> : null }
    </div>);
  }
}
