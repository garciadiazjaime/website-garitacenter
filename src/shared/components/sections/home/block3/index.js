import React from 'react';

const style = require('./style.scss');


export default class Block3 extends React.Component {

  render() {
    return (<div className="container-fluid">
        <div className={style.wrapper1 + ' row'}>
          <div className="col-xs-12">
            Si eres de <strong>Tijuana</strong> ayúdanos a mejorar el reporte de garitas
            seleccionando una de las siguientes opciones: <br /><br />
          </div>

          <div className="btn-group col-xs-12" data-toggle="buttons">
            <div className="btn btn-default col-xs-6">
              <input type="radio" name="options" id="option1"/>
              Estoy en la fila
            </div>
            <div className="btn btn-default col-xs-6">
              <input type="radio" name="options" id="option2"/>
              Cruzo más tarde
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="pull-right">
              <button className="btn btn-default">Enviar</button>
            </div>
          </div>
        </div>
      </div>);
  }
}
