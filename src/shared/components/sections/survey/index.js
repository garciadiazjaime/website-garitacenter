/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import QuestionEntry from './questionEntry';
import QuestionPlace from './questionPlace';
import QuestionTime from './questionTime';
import QuestionReview from './questionReview';
import { toTitleCase } from '../../../utils/string';

const style = require('../reporteUsuario/style.scss');


export default class ReporteUsuarioSection extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.renderBreadcrumb = this.renderBreadcrumb.bind(this);
    this.state = {
      view: 'QUESTION_ENTRY',
      showBreadCrumb: ['QUESTION_PLACE', 'QUESTION_TIME'],
    };
  }

  clickHandler(viewState, state) {
    const newState = _.assign({}, this.state, state, {
      view: viewState,
    });
    this.setState(newState);
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
      content = (<QuestionPlace clickHandler={this.clickHandler} port={this.state.port} />);
    } else if (this.state.view === 'QUESTION_TIME') {
      content = (<QuestionTime clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_REVIEW') {
      content = (<QuestionReview clickHandler={this.clickHandler} data={this.state} />);
    } else if (this.state.view === 'QUESTION_SAVE') {
      content = (<div>fin</div>);
    }
    return (<div className={style.report}>
      <div>
        <div className={style.reportHeader}>
          {this.renderBreadcrumb()}
            <Link to="/reporte-usuario" className={style.closeButton}>&times;</Link>
        </div>
      </div>
      {content}
    </div>);
  }
}
