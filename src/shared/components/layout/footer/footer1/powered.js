/* eslint max-len: [2, 500, 4] */
import React from 'react';

const style = require('./style.scss');

export default function Powered() {
  return (<div className={style.powered}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            Todos los derechos reservados &copy; GaritaCenter <br />
            Reporte de garitas para San Ysidro y Otay | Tijuana
          </div>
          <div className="col-xs-12 col-sm-6">
            Un proyecto de &nbsp;
            <a href="http://www.mintitmedia.com" title="Diseño y Desarrollo Web en Tijuana" target="_blank">MINT</a>
          </div>
        </div>
      </div>
  </div>);
}
