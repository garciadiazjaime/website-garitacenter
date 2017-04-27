/* eslint max-len: [2, 500, 4] */
import React from 'react';

import GaUtilAdapter from '../../../adapters/gaUtilAdapter';
const style = require('./style.scss');

function clickHandler() {
  const contactEl = document.getElementById('contact');
  const msgEl = document.getElementById('msg');
  if (!contactEl || contactEl.value.length < 5) {
    msgEl.innerHTML = 'Olvidaste ingresar tu correo o teléfono';
  } else {
    msgEl.className = 'text-success';
    msgEl.innerHTML = 'Te contactaremos a la brevedad, gracias :)';
    GaUtilAdapter.sendEvent('sales', 'info', contactEl.value);
    document.getElementsByTagName('button')[0].remove();
  }
}
export default function SalesSection() {
  return (<div className="container">
    <div className="row">
      <div className="col-xs-12">
        <h1 className={style.title}>¿Por qué anunciarte en GaritaCenter.com?</h1>
        <h2 className={style.subtitle}>Porque tu producto satisface necesidades fronterizas como:</h2>
        <ul className={style.list}>
          <li>Restaurantes, bares y entretenimiento.</li>
          <li>Venta de ropa y electrónicos.</li>
          <li>Seguros automovilísticos.</li>
          <li>Turismo médicos.</li>
        </ul>
        <h2 className={style.subtitle}>Y porque nuestra audiencia es muy atractiva:</h2>
        <ul className={style.list}>
          <li>Nos visitan más de 200&apos;000 personas cada mes.</li>
          <li>Que sabemos en que áreas se mueven.</li>
          <li>Y que ganan y/o gastan en dólares</li>
        </ul>
        <h2 className={style.subtitle}>Aprovecha esta oportunidad adquiriendo uno de nuestros paquetes:</h2>
        <table className={style.table}>
          <tbody>
            <tr>
              <th>Paquete</th>
              <th>Min de Impresiones*</th>
              <th className="hidden-xs">Cambios**</th>
              <th className="hidden-xs">Reporte***</th>
              <th>Costo</th>
            </tr>
            <tr>
              <td>1 mes</td>
              <td>10&apos;000</td>
              <td className="hidden-xs">/</td>
              <td className="hidden-xs">Sí</td>
              <td className={style.cost}>$2000.00<span className={style.currency}>MX</span></td>
            </tr>
            <tr>
              <td>3 meses</td>
              <td>30&apos;000</td>
              <td className="hidden-xs">2</td>
              <td className="hidden-xs">Mensual</td>
              <td className={style.cost}>$5000.00<span className={style.currency}>MX</span></td>
            </tr>
            <tr>
              <td>6 meses</td>
              <td>60&apos;000</td>
              <td className="hidden-xs">5</td>
              <td className="hidden-xs">Mensual</td>
              <td className={style.cost}>$9000.00<span className={style.currency}>MX</span></td>
            </tr>
            <tr>
              <td>12 meses</td>
              <td>120&apos;000</td>
              <td className="hidden-xs">ilimitados</td>
              <td className="hidden-xs">Mensual</td>
              <td className={style.cost}>$15&apos;000.00<span className={style.currency}>MX</span></td>
            </tr>
          </tbody>
        </table>
        <h2 className={style.subtitle}>Ingresa tu Correo o Teléfono para comenzar</h2>
      </div>
      <div className="col-xs-12 col-sm-8">
        <div className="form-group">
          <input type="email" id="contact" className="form-control" placeholder="Correo o Teléfono" />
          <p id="msg" className="text-danger"></p>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4">
        <button className={style.button + ' btn btn-default'} onClick={clickHandler}>Enviar</button>
      </div>
      <div className="col-xs-12">
        <p className={style.notes}>* Esta es la cantidad de impresiones mínimas que nos comprometemos a mostrar, pero seguiremos mostrando tu banner aunque ese número se exeda, hasta que se cumpla la vigencia de tu contrato.<br />
        <span className="visible-xs">* Todos los servicios incluyen también cierto número de cambio del contenido del banner, dependiendo del paquete; así como un reporte mensual<br /></span>
        <span className="hidden-xs">** Se refiere a cambios de banners en caso de que tu campaña requiera de presentar diferentes banners en el transcurso de su ejecución.<br />
      *** El reporte incluye número de impresiones en el mes, número de clicks y recomendaciones para obtener más clicks.</span>
        </p>
      </div>
    </div>
  </div>);
}
