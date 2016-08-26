import React from 'react';
import ClickOption from './clickOption';


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
      Cuánto tiempo llevas esperando?
      <div className="row">
        <div className="col-sm-6">
          <ClickOption value="15_mins" clickHandler={this.clickHandler}>
            0:15
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="30_mins" clickHandler={this.clickHandler}>
            0:30
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="1_hra" clickHandler={this.clickHandler}>
            1:00
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="1:30_hra" clickHandler={this.clickHandler}>
            1:30
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="2_hrs" clickHandler={this.clickHandler}>
            2:00
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="3_hrs" clickHandler={this.clickHandler}>
            3:00
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="4_hrs" clickHandler={this.clickHandler}>
            4:00
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="ya_vivo_aqui" clickHandler={this.clickHandler}>
            ya vivo aquí
          </ClickOption>
        </div>
      </div>
      <div className="row">
        <a onClick={this.backHandler}>Volver</a>
      </div>
    </div>);
  }
}

QuestionTime.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
};
