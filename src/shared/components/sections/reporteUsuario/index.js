import React from 'react';

import FormReporteUsuario from './formReporteUsuario';
const style = require('./style.scss');

export default class ReporteUsuarioSection extends React.Component {

  render() {
    return (<div className={style.mainWrapper}>
      <FormReporteUsuario />
    </div>);
  }
}
