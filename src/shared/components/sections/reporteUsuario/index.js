/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

const style = require('./style.scss');

import QuestionEntry from './questionEntry';
import QuestionPlace from './questionPlace';
import QuestionTime from './questionTime';
import QuestionReview from './questionReview';


export default class ReporteUsuarioSection extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      view: 'INIT',
    };
  }

  clickHandler(viewState, state) {
    if (typeof viewState === 'object') {
      this.setState({
        view: 'QUESTION_ENTRY',
      });
    } else {
      const newState = viewState !== 'QUESTION_SAVE' ? _.assign({}, this.state, state, {
        view: viewState,
      }) : { view: 'QUESTION_SAVE', entry: '', place: '', port: '', time: '', type: '' };
      this.setState(newState);
    }
  }

  renderInit() {
    return (<div>
      <a className={style.btn_report} onClick={this.clickHandler}>¿Cómo te va en la línea?
      <span className={style.subtitle}>
        Repórtalo aquí y ayuda a los demás
      </span>
      </a>
      <br />
      <div>
        mostrar feed de twitter
      </div>
    </div>);
  }

  render() {
    console.log(this.state);
    let content;
    if (!this.state.view || this.state.view === 'INIT') {
      content = this.renderInit();
    } else if (this.state.view === 'QUESTION_ENTRY') {
      content = (<QuestionEntry clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_PLACE') {
      content = (<QuestionPlace clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_TIME') {
      content = (<QuestionTime clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_REVIEW') {
      content = (<QuestionReview clickHandler={this.clickHandler} data={this.state} />);
    } else if (this.state.view === 'QUESTION_SAVE') {
      content = this.renderInit();
    }
    return (<div className="container-fluid">
      {content}
    </div>);
  }
}
