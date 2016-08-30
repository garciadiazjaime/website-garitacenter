import React from 'react';
import ClickOption from './clickOption';


export default class QuestionPlace extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.backHandler = this.backHandler.bind(this);
    this.renderSanYsidrio = this.renderSanYsidrio.bind(this);
    this.renderOtay = this.renderOtay.bind(this);
  }

  clickHandler(value) {
    const state = {
      place: value,
    };
    this.props.clickHandler('QUESTION_TIME', state);
  }

  backHandler() {
    this.props.clickHandler('QUESTION_ENTRY', {
      entry: '',
      port: '',
      type: '',
    });
  }

  renderSanYsidrio() {
    return (<div className="row">
      <div className="col-sm-12">
        <ClickOption value="a_menos_de_10_carros" clickHandler={this.clickHandler}>
          A menos de 10 carros
        </ClickOption>
      </div>
      <div className="col-sm-12">
        <ClickOption value="el_puente" clickHandler={this.clickHandler}>
          En el puente
        </ClickOption>
      </div>
      <div className="col-sm-12">
        <ClickOption value="las_tiendas" clickHandler={this.clickHandler}>
          En las tiendas
        </ClickOption>
      </div>
      <div className="col-sm-12">
        <ClickOption value="el_arco" clickHandler={this.clickHandler}>
          En el arco
        </ClickOption>
      </div>
      <div className="col-sm-12">
        <ClickOption value="costco" clickHandler={this.clickHandler}>
          En costco
        </ClickOption>
      </div>
    </div>);
  }

  renderOtay() {
    return (<div className="row">
      <div className="col-sm-12">
        <ClickOption value="a_menos_de_10_carros" clickHandler={this.clickHandler}>
          A menos de 10 carros
        </ClickOption>
      </div>
      <div className="col-sm-12">
        <ClickOption value="el_puente" clickHandler={this.clickHandler}>
          En el puente
        </ClickOption>
      </div>
      <div className="col-sm-12">
        <ClickOption value="la_fruteria" clickHandler={this.clickHandler}>
          En la frutería
        </ClickOption>
      </div>
      <div className="col-sm-12">
        <ClickOption value="los_mariscos" clickHandler={this.clickHandler}>
          En los mariscos
        </ClickOption>
      </div>
      <div className="col-sm-12">
        <ClickOption value="el_parque_de_la_amistad" clickHandler={this.clickHandler}>
          En el parque de la amistad
        </ClickOption>
      </div>
    </div>);
  }

  render() {
    const { port } = this.props;
    return (<div className="container-fluid">
      <div className="row">
        A qué altura estas?
      </div>
      { port === 'san_ysidro' ? this.renderSanYsidrio() : this.renderOtay() }
      <div className="row">
        <a onClick={this.backHandler}>Volver</a>
      </div>
    </div>);
  }
}

QuestionPlace.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
  port: React.PropTypes.string.isRequired,
};
