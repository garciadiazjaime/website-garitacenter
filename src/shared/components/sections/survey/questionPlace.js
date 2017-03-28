/* eslint max-len: [2, 500, 4] */
import React from 'react';
import PlaceOption from './placeOption';
import placesData from './placesData';

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

  renderQuestions(port, type, entry) {
    const data = placesData[port] && placesData[port][type] && placesData[port][type][entry].constructor === Array ? placesData[port][type][entry] : [];
    return (<PlaceOption data={data} btnClassName={style.btn_option} clickHandler={this.clickHandler} />);
  }

  render() {
    const { port, type, entry } = this.props;
    return (<div className="container-fluid">
      <div className="col-sm-12">
        <h2 className={style.heading2}>¿A qué altura estas?</h2>
      </div>
      {this.renderQuestions(port, type, entry)}
      <a onClick={this.backHandler} className={style.prevStep}>Volver</a>
    </div>);
  }
}

QuestionPlace.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
  port: React.PropTypes.string.isRequired,
  entry: React.PropTypes.string.isRequired,
  type: React.PropTypes.string.isRequired,
};
