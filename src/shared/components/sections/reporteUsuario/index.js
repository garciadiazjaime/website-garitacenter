/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

const style = require('./style.scss');
import TweetsBlock from './tweetsBlock';
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

  render() {
    console.log(this.state);
    let content;
    if (!this.state.view || this.state.view === 'INIT') {
      content = (<TweetsBlock clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_ENTRY') {
      content = (<QuestionEntry clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_PLACE') {
      content = (<QuestionPlace clickHandler={this.clickHandler} port={this.state.port} />);
    } else if (this.state.view === 'QUESTION_TIME') {
      content = (<QuestionTime clickHandler={this.clickHandler} />);
    } else if (this.state.view === 'QUESTION_REVIEW') {
      content = (<QuestionReview clickHandler={this.clickHandler} data={this.state} />);
    } else if (this.state.view === 'QUESTION_SAVE') {
      content = (<TweetsBlock clickHandler={this.clickHandler} />);
    }
    return (<div className="container-fluid">
      {content}
    </div>);
  }
}
