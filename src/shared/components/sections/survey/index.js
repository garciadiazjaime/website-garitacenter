/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import GaUtilAdapter from '../../../adapters/gaUtilAdapter';
import Block2 from '../home/block2';
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
      showBreadCrumb: ['QUESTION_PLACE', 'QUESTION_TIME'],
    };
  }

  clickHandler(view, data) {
    let label = '';
    if (view === 'QUESTION_SAVE') {
      this.redirect();
      label = 'published';
    } else {
      if (data) {
        const newState = _.assign({}, this.state, data, {
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

  renderBreadcrumb() {
    const { showBreadCrumb, view } = this.state;
    const port = toTitleCase(this.state.port || '');
    const entry = toTitleCase(this.state.entry || '');
    const type = toTitleCase(this.state.type || '');
    const place = toTitleCase(this.state.place || '');
    return showBreadCrumb.indexOf(view.toUpperCase()) !== -1 ? (<div>
      { port } <span className={style.triangleRight}></span>
      { entry } <span className={style.triangleRight}></span>
      { type } { place ? <span className={style.triangleRight}></span> : null }
      { place }
    </div>) : null;
  }

  render() {
    let content;
    if (this.state.view === 'QUESTION_ENTRY') {
      content = (<QuestionEntry clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_PLACE') {
      content = (<QuestionPlace clickHandler={this.clickHandler} port={this.state.port} entry={this.state.entry} type={this.state.type} />);
    } else if (this.state.view === 'QUESTION_TIME') {
      content = (<QuestionTime clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_REVIEW') {
      content = (<QuestionReview clickHandler={this.clickHandler} data={this.state} />);
    }
    return (<div className={style.survey}>
      <div>
        <div className={style.reportHeader}>
          {this.renderBreadcrumb()}
            <Link to="/reporte-usuario" className={style.closeButton} onClick={this.clickHandler}>&times;</Link>
        </div>
      </div>
      {content}
      <Block2 />
    </div>);
  }
}

ReporteUsuarioSection.propTypes = {
  history: React.PropTypes.any,
};
