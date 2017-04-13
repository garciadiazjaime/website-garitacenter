/* eslint max-len: [2, 500, 4] */
import React from 'react';

const style = require('./style.scss');

export default class VentasSection extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (<div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1 className={style.title}>¿Por qué anunciarte en garita center?</h1>
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
            <tr>
              <th>Paquete</th>
              <th>Min de Impresiones*</th>
              <th>Cambios**</th>
              <th>Reporte***</th>
              <th>Costo</th>
            </tr>
            <tr>
              <td>1 mes</td>
              <td>10&apos;000</td>
              <td>/</td>
              <td>si</td>
              <td className={style.cost}>$2000.00<span className={style.currency}>MXN</span></td>
            </tr>
            <tr>
              <td>3 meses</td>
              <td>30&apos;000</td>
              <td>2</td>
              <td>Mensual</td>
              <td className={style.cost}>$5000.00<span className={style.currency}>MXN</span></td>
            </tr>
            <tr>
              <td>6 meses</td>
              <td>60&apos;000</td>
              <td>5</td>
              <td>Mensual</td>
              <td className={style.cost}>$9000.00<span className={style.currency}>MXN</span></td>
            </tr>
            <tr>
              <td>12 meses</td>
              <td>120&apos;000</td>
              <td>ilimitados</td>
              <td>Mensual</td>
              <td className={style.cost}>$15&apos;000.00<span className={style.currency}>MXN</span></td>
            </tr>
          </table>
          <h2 className={style.subtitle}>Ingresa tu correo para comenzar</h2>
          <input type="email" />
          <button>Enviar</button>
          <p className={style.notes}>* Esta es la cantidad de impresiones mínimas que nos comprometemos a mostrar, pero seguiremos mostrando tu banner aunque ese número se exeda, hasta que se cumpla la vigencia de tu contrato.<br />
          ** Se refiere a cambios de banners en caso de que tu campaña requiera de presentar diferentes banners en el transcurso de su ejecución.<br />
        *** El reporte incluye número de impresiones en el mes, número de clicks y recomendaciones para obtener más clicks.
          </p>

        </div>
      </div>
    </div>);
  }
}

VentasSection.propTypes = {
  data: React.PropTypes.any,
};
