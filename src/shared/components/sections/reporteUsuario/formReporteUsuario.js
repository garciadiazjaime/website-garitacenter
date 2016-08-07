/* eslint max-len: [2, 500, 4] */
import React from 'react';


export default class FormReporteUsuario extends React.Component {

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
              Seleccionar Garita <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">San Ysidro</a></li>
              <li><a href="#">Otay</a></li>
            </ul>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Dónde estas?</label>
          <br />
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Seleccionar Lugar <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">Lugar A</a></li>
              <li><a href="#">Lugar B</a></li>
              <li><a href="#">Lugar C</a></li>
              <li><a href="#">Lugar D</a></li>
              <li><a href="#">Lugar E</a></li>
            </ul>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputFile">Cuánto tiempo llevas?</label>
          <br />
          <div className="btn-group">
            <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Seleccionar Tiempo <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li><a href="#">Tiempo A</a></li>
              <li><a href="#">Tiempo B</a></li>
              <li><a href="#">Tiempo C</a></li>
              <li><a href="#">Tiempo D</a></li>
              <li><a href="#">Tiempo E</a></li>
            </ul>
          </div>
        </div>
        <button className="btn btn-default">Submit</button>
      </div>
    </div>);
  }
}
