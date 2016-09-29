/* eslint max-len: [2, 500, 4] */
import React from 'react';
import ClickOption from './clickOption';

const style = require('../reporteUsuario/style.scss');

export default class QuestionTime extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.backHandler = this.backHandler.bind(this);
  }

  clickHandler(value) {
    const state = {
      time: value,
    };
    this.props.clickHandler('QUESTION_REVIEW', state);
  }

  backHandler() {
    this.props.clickHandler('QUESTION_PLACE', {
      place: '',
    });
  }

  render() {
    return (<div className="container-fluid">
      <h2 className={style.heading2}>¿Cuánto tiempo llevas esperando?</h2>
      <div className="row">
        <div className="col-xs-6">
          <ClickOption value="15_mins" clickHandler={this.clickHandler} className={style.btn_option}>
            0:15
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="30_mins" clickHandler={this.clickHandler} className={style.btn_option}>
            0:30
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="1_hra" clickHandler={this.clickHandler} className={style.btn_option}>
            1:00
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="1:30_hra" clickHandler={this.clickHandler} className={style.btn_option}>
            1:30
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="2_hrs" clickHandler={this.clickHandler} className={style.btn_option}>
            2:00
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="3_hrs" clickHandler={this.clickHandler} className={style.btn_option}>
            2:30
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="4_hrs" clickHandler={this.clickHandler} className={style.btn_option}>
            3:00
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="5_hrs" clickHandler={this.clickHandler} className={style.btn_option}>
            3:30
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="4_hrs" clickHandler={this.clickHandler} className={style.btn_option}>
            4:00
          </ClickOption>
        </div>
        <div className="col-xs-6">
          <ClickOption value="5_hrs" clickHandler={this.clickHandler} className={style.btn_option}>
            4:30
          </ClickOption>
        </div>
      </div>
      <a onClick={this.backHandler} className={style.prevStep}>Volver</a>
    </div>);
  }
}

QuestionTime.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
};
