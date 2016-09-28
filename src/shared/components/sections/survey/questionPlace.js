/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';
import PlaceOption from './placeOption';
import placesData from './placesData';

const style = require('../reporteUsuario/style.scss');

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
    const data = placesData[port] && placesData[port][type] && _.isArray(placesData[port][type][entry]) ? placesData[port][type][entry] : [];
    return (<PlaceOption data={data} btnClassName={style.btn_option} clickHandler={this.clickHandler} />);
  }

  render() {
    const { port, type, entry } = this.props;
    return (<div className="container-fluid">
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
