import React from 'react';

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
          <a className="btn btn-default" onClick={this.clickHandler}>Reportar</a>
          : <FormReporteUsuario />
        }
      </div>
    </div>);
  }
}
