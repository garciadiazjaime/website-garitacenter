/* eslint max-len: [2, 500, 4] */
import React from 'react';

const style = require('./style.scss');
import FormReporteUsuario from './formReporteUsuario';


export default class ReporteUsuarioSection extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      showForm: false,
    };
  }

  clickHandler() {
    if (!this.state.showForm) {
      this.setState({
        showForm: true,
      });
    }
  }

  render() {
    return (<div className="container-fluid">
      <div>
        mostrar feed de twitter
      </div>
      <div>
        { !this.state.showForm ?
          <a className={style.btn_reportar + ' btn btn-default '} onClick={this.clickHandler}>¿Cómo te va en la Línea?<span className={style.subtitle}>Repórtalo aquí y ayuda a los demás</span></a>
          : <FormReporteUsuario />
        }
      </div>
    </div>);
  }
}
