/* eslint max-len: [2, 500, 4] */

import React from 'react';
import Loader from '../../../elements/loader';
const style = require('./style.scss');


export default class Block3 extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      showQuestions: true,
      showLoading: false,
    };
  }

  clickHandler() {
    this.setState({
      showLoading: true,
    });
    // todo: remove this hard values once BE is working
    const currentUsers = Math.floor(Math.random() * 300) + 1 + 42;
    const futureUsers = Math.floor(Math.random() * 300) + 1 + 42;
    setTimeout(() => {
      this.setState({
        showLoading: false,
        showQuestions: false,
        currentUsers,
        futureUsers,
      });
    }, 1500);
  }

  render() {
    return (<div className="container-fluid">
      <div className="row"><hr /></div>
      <div>
        Si eres de <strong>Tijuana</strong> ayúdanos a mejorar el reporte de garitas
        seleccionando una de las siguientes opciones: <br /><br />
      </div>
      {
        this.state.showQuestions ?
        <div>
          <div>
            <div className={'btn-group ' + style.voteWrapper} data-toggle="buttons">
              <div className={'btn btn-default pull-right ' + style.input}>
                <input type="radio" name="options" id="option2"/>
                Cruzo más tarde
              </div>
              <div className={'btn btn-default pull-right ' + style.input}>
                <input type="radio" name="options" id="option1"/>
                Estoy en la fila
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <div className={'pull-right ' + style.submit}>
                <button className="btn btn-default" onClick={this.clickHandler}>Enviar</button>
              </div>
            </div>
          </div>
        </div> :
        <div>
          <p>
            Gracias, tu respuesta nos ayuda a mejorar el <strong>reporte de garitas</strong>.
          </p>
          <p>
            <strong>{this.state.currentUsers}</strong> usuarios respondieron estar en la fila.
          </p>
          <p>
            <strong>{this.state.futureUsers}</strong> usuarios respondieron hacer la fila después.
          </p>
          <p>
            Las respuestas son referentes a los últimos <strong>30 minutos</strong>.
          </p>
        </div>
      }
      {
        this.state.showLoading ?
        <Loader /> : null
      }
    </div>);
  }
}
