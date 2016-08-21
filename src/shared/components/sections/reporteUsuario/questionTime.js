import React from 'react';
import ClickOption from './clickOption';


export default class QuestionTime extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(value) {
    const state = {
      time: value,
    };
    this.props.clickHandler('QUESTION_REVIEW', state);
  }

  render() {
    return (<div className="container-fluid">
      Cuánto tiempo llevas esperando?
      <div className="row">
        <div className="col-sm-6">
          <ClickOption value="time_a" clickHandler={this.clickHandler}>
            0:15
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="time_b" clickHandler={this.clickHandler}>
            0:30
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="time_c" clickHandler={this.clickHandler}>
            1:00
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="time_d" clickHandler={this.clickHandler}>
            1:30
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="time_e" clickHandler={this.clickHandler}>
            2:00
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="time_e" clickHandler={this.clickHandler}>
            3:00
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="time_e" clickHandler={this.clickHandler}>
            4:00
          </ClickOption>
        </div>
        <div className="col-sm-6">
          <ClickOption value="time_e" clickHandler={this.clickHandler}>
            ya vivo aquí
          </ClickOption>
        </div>
      </div>
    </div>);
  }
}

QuestionTime.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
};
