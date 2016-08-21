import React from 'react';
import ClickOption from './clickOption';


export default class QuestionReview extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.backHandler = this.backHandler.bind(this);
  }

  clickHandler() {
    this.props.clickHandler('QUESTION_SAVE');
  }

  backHandler() {
    this.props.clickHandler('QUESTION_TIME', {
      time: '',
    });
  }

  renderPort(data) {
    return (<div>
      {data}
    </div>);
  }

  renderEntry(entry, type) {
    return (<div>
      {entry}, {type}
    </div>);
  }

  renderPlace(data) {
    return (<div>
      {data}
    </div>);
  }

  renderTime(data) {
    return (<div>
      {data}
    </div>);
  }

  render() {
    const { data } = this.props;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <p>Por dónde cruzas?</p>
          {this.renderPort(data.port)}
          {this.renderEntry(data.entry, data.type)}
        </div>
        <div className="col-sm-12">
          <p>A qué altura estas?</p>
          {this.renderPlace(data.place)}
        </div>
        <div className="col-sm-12">
          <p>Cuánto tiempo llevas esperando?</p>
          {this.renderTime(data.time)}
        </div>
        <div className="col-sm-12">
          <ClickOption clickHandler={this.clickHandler} value="">
            Publicar
          </ClickOption>
        </div>
      </div>
      <div className="row">
        <a onClick={this.backHandler}>Volver</a>
      </div>
    </div>);
  }
}

QuestionReview.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
};
