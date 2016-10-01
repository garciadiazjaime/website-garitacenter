/* eslint max-len: [2, 500, 4] */
import React from 'react';
import ClickOption from './clickOption';

const style = require('./style.scss');

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
      <h2 className={style.heading2}>¿A qué altura estas?</h2>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_a" clickHandler={this.clickHandler}>
          A menos de 10 carros
        </ClickOption>
      </div>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_b" clickHandler={this.clickHandler}>
          En el puente de las ballenas
        </ClickOption>
      </div>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_c" clickHandler={this.clickHandler}>
          Por el Palacio Municipal
        </ClickOption>
      </div>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_d" clickHandler={this.clickHandler}>
          Por el Hospital General
        </ClickOption>
      </div>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_e" clickHandler={this.clickHandler}>
          Por la 20 de noviembre
        </ClickOption>
      </div>
    </div>);
  }

  renderOtay() {
    return (<div className="row">
      <h2 className={style.heading2}>¿A qué altura estas?</h2>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_a" clickHandler={this.clickHandler}>
          A menos de 10 carros
        </ClickOption>
      </div>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_b" clickHandler={this.clickHandler}>
          En el puente
        </ClickOption>
      </div>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_c" clickHandler={this.clickHandler}>
          En la frutería
        </ClickOption>
      </div>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_d" clickHandler={this.clickHandler}>
          En los mariscos
        </ClickOption>
      </div>
      <div className="col-xs-12">
        <ClickOption className={style.btn_option} value="place_e" clickHandler={this.clickHandler}>
          En el parque de la amistad
        </ClickOption>
      </div>
    </div>);
  }

  render() {
    const { port } = this.props;
    return (<div className="container-fluid">
      { port === 'san_ysidro' ? this.renderSanYsidrio() : this.renderOtay() }
      <a onClick={this.backHandler} className={style.prevStep}>Volver</a>
    </div>);
  }
}

QuestionPlace.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
  port: React.PropTypes.string.isRequired,
};
