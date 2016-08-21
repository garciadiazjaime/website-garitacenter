import React from 'react';
import ClickOption from './clickOption';


export default class QuestionReview extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.props.clickHandler('QUESTION_SAVE');
  }

  render() {
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <p>Por dónde cruzas?</p>
          <p>San Ysidrio (normal)</p>
        </div>
        <div className="col-sm-12">
          <p>A qué altura estas?</p>
          <p>en la frutería</p>
        </div>
        <div className="col-sm-12">
          <p>Cuánto tiempo llevas esperando?</p>
          <p>1:00 hora</p>
        </div>
        <div className="col-sm-12">
          <ClickOption clickHandler={this.clickHandler} prop="" value="">
            Publicar
          </ClickOption>
        </div>
      </div>
    </div>);
  }
}

QuestionReview.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
};
