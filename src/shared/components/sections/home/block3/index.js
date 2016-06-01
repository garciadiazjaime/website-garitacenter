import React from 'react';

const style = require('./style.scss');


export default class Block3 extends React.Component {

  render() {
    return (<div className="container-fluid">
      <div className="row"><hr /></div>
      <div>
        Si eres de <strong>Tijuana</strong> ayúdanos a mejorar el reporte de garitas
        seleccionando una de las siguientes opciones: <br /><br />
      </div>
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
            <button className="btn btn-default">Enviar</button>
          </div>
        </div>
      </div>
    </div>);
  }
}
