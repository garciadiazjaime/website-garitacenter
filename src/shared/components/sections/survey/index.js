/* eslint max-len: [2, 500, 4] */
import React from 'react';

import GaUtilAdapter from '../../../adapters/gaUtilAdapter';
import QuestionEntry from './questionEntry';
import QuestionPlace from './questionPlace';
import QuestionTime from './questionTime';
import QuestionReview from './questionReview';

const style = require('./style.scss');

export default class ReporteUsuarioSection extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      view: 'QUESTION_ENTRY',
    };
  }

  clickHandler(view, data) {
    let label = '';
    if (view === 'QUESTION_SAVE') {
      this.redirect();
      label = 'published';
    } else {
      if (data) {
        const newState = Object.assign({}, this.state, data, {
          view,
        });
        this.setState(newState);
        label = Object.values(data).join(':').replace(/ /g, '_').toLowerCase();
      }
    }
    GaUtilAdapter.sendEvent('survey', 'click', label);
  }

  redirect() {
    this.props.history.push('/reporte-usuario');
  }

  renderView(data) {
    if (data === 'QUESTION_PLACE') {
      return (<QuestionPlace clickHandler={this.clickHandler} port={this.state.port} entry={this.state.entry} type={this.state.type} />);
    } else if (data === 'QUESTION_TIME') {
      return (<QuestionTime clickHandler={this.clickHandler} />);
    } else if (data === 'QUESTION_REVIEW') {
      return (<QuestionReview clickHandler={this.clickHandler} data={this.state} />);
    }
    return (<QuestionEntry clickHandler={this.clickHandler} />);
  }

  render() {
    return (<div className={style.survey}>
      {this.renderView(this.state.view)}
    </div>);
  }
}

ReporteUsuarioSection.propTypes = {
  history: React.PropTypes.any,
};
