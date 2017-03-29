/* eslint max-len: [2, 500, 4] */
import React from 'react';

import GaUtilAdapter from '../../../adapters/gaUtilAdapter';
import QuestionEntry from './questionEntry';
import QuestionPlace from './questionPlace';
import QuestionTime from './questionTime';
import QuestionReview from './questionReview';
import { toTitleCase } from '../../../utils/string';

const style = require('./style.scss');

export default class ReporteUsuarioSection extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.renderBreadcrumb = this.renderBreadcrumb.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {
      view: 'QUESTION_ENTRY',
    };
    this.showBreadCrumb = ['QUESTION_PLACE', 'QUESTION_TIME'];
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
    GaUtilAdapter.sendEvent('survey', 'click', label.length > 3 ? label : 'back');
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

  renderBreadcrumb() {
    const { view } = this.state;
    const port = toTitleCase(this.state.port || '');
    const entry = toTitleCase(this.state.entry || '');
    const type = toTitleCase(this.state.type || '');
    const place = toTitleCase(this.state.place || '');
    return this.showBreadCrumb.indexOf(view.toUpperCase()) !== -1 ? (<div className={style.reportHeader}>
      { port } <span className={style.triangleRight}></span>
      { entry } <span className={style.triangleRight}></span>
      { type } { place ? <span className={style.triangleRight}></span> : null }
      { place }
    </div>) : null;
  }

  render() {
    return (<div className={style.survey}>
      {this.renderBreadcrumb()}
      {this.renderView(this.state.view)}
    </div>);
  }
}

ReporteUsuarioSection.propTypes = {
  history: React.PropTypes.any,
};
