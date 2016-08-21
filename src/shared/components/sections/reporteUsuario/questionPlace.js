import React from 'react';
import ClickOption from './clickOption';


export default class QuestionPlace extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(value) {
    const state = {
      place: value,
    };
    this.props.clickHandler('QUESTION_TIME', state);
  }

  render() {
    return (<div className="container-fluid">
      A qué altura estas?
      <div className="row">
        <div className="col-sm-12">
          <ClickOption value="place_a" clickHandler={this.clickHandler}>
            A menos de 10 carros
          </ClickOption>
        </div>
        <div className="col-sm-12">
          <ClickOption value="place_b" clickHandler={this.clickHandler}>
            En el puente
          </ClickOption>
        </div>
        <div className="col-sm-12">
          <ClickOption value="place_c" clickHandler={this.clickHandler}>
            En la frutería
          </ClickOption>
        </div>
        <div className="col-sm-12">
          <ClickOption value="place_d" clickHandler={this.clickHandler}>
            En los mariscos
          </ClickOption>
        </div>
        <div className="col-sm-12">
          <ClickOption value="place_e" clickHandler={this.clickHandler}>
            En el parque de la amistad
          </ClickOption>
        </div>
      </div>
    </div>);
  }
}

QuestionPlace.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
};
