/* eslint max-len: [2, 500, 4] */
import React from 'react';
import ClickOption from './clickOption';

const style = require('./style.scss');

export default class QuestionPlace extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.backHandler = this.backHandler.bind(this);
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

  render() {
    return (<div className="container-fluid">
      A qué altura estas?
      <div className="row">
        <div className="col-sm-12">
          <ClickOption className={style.btn_place} value="place_a" clickHandler={this.clickHandler}>
            A menos de 10 carros
          </ClickOption>
        </div>
        <div className="col-sm-12">
          <ClickOption className={style.btn_place} value="place_b" clickHandler={this.clickHandler}>
            En el puente
          </ClickOption>
        </div>
        <div className="col-sm-12">
          <ClickOption className={style.btn_place} value="place_c" clickHandler={this.clickHandler}>
            En la frutería
          </ClickOption>
        </div>
        <div className="col-sm-12">
          <ClickOption className={style.btn_place} value="place_d" clickHandler={this.clickHandler}>
            En los mariscos
          </ClickOption>
        </div>
        <div className="col-sm-12">
          <ClickOption className={style.btn_place} value="place_e" clickHandler={this.clickHandler}>
            En el parque de la amistad
          </ClickOption>
        </div>
      </div>
      <div className="row">
        <a onClick={this.backHandler}>Volver</a>
      </div>
    </div>);
  }
}

QuestionPlace.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
};
