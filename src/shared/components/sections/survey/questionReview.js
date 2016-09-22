/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';
import Loader from '../../elements/loader';
import ClickOption from './clickOption';
import RequestUtil from '../../../utils/requestUtil';
import { toTitleCase } from '../../../utils/string';

const style = require('../reporteUsuario/style.scss');


export default class QuestionReview extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.backHandler = this.backHandler.bind(this);
    this.saveSurvey = this.saveSurvey.bind(this);
    this.renderInvalidResponse = this.renderInvalidResponse.bind(this);
    this.state = {
      formMessage: '',
      showLoading: false,
    };
  }

  clickHandler() {
    this.saveSurvey();
  }

  backHandler() {
    this.props.clickHandler('QUESTION_TIME', {
      time: '',
    });
  }

  saveSurvey() {
    const data = _.assign({}, this.props.data);
    const url = '/user/report';
    if (data && data.port && data.type && data.entry && data.place && data.time) {
      // remove data not related to survey
      delete data.view;
      this.setState(_.assign({}, this.state, {
        showLoading: true,
      }));
      RequestUtil.post(url, data).then((results) => {
        if (results && results.entity.status) {
          this.props.clickHandler('QUESTION_SAVE');
        } else {
          this.renderInvalidResponse();
        }
      }, () => {
        this.renderInvalidResponse();
      });
    } else {
      this.setState({
        formMessage: 'Favor de llenar todos los campos.',
        showLoading: false,
        status: false,
      });
    }
  }

  renderInvalidResponse() {
    this.setState({
      formMessage: 'Lo sentimos, favor de intentar más tarde.',
      showLoading: false,
      status: false,
    });
  }

  renderPort(data) {
    return (<div>
      {toTitleCase(data)}
    </div>);
  }

  renderEntry(entry, type) {
    return (<div>
      {toTitleCase(entry)}, {toTitleCase(type)}
    </div>);
  }

  renderPlace(data) {
    return (<div>
      {toTitleCase(data)}
    </div>);
  }

  renderTime(data) {
    return (<div>
      {toTitleCase(data)}
    </div>);
  }

  render() {
    const { data } = this.props;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <h2 className={style.heading2}>Por dónde cruzas?</h2>
          <h3 className={style.heading3}>
            {this.renderPort(data.port)}
            {this.renderEntry(data.entry, data.type)}
          </h3>
        </div>
        <div className="col-sm-12">
          <h2 className={style.heading2}>A qué altura estas?</h2>
          <h3 className={style.heading3}>
            {this.renderPlace(data.place)}
          </h3>
        </div>
        <div className="col-sm-12">
          <h2 className={style.heading2}>Cuánto tiempo llevas esperando?</h2>
          <h3 className={style.heading3}>
            {this.renderTime(data.time)}
          </h3>
        </div>
        <div className="col-sm-12">
          <ClickOption clickHandler={this.clickHandler} value="" className={style.btn_publish}>
            Publicar
          </ClickOption>
        </div>
      </div>
      <a onClick={this.backHandler} className={style.prevStep}>Volver</a>
      <div className="form-group">
        <span className={ this.state.status !== true ? 'text-danger' : 'text-success' }>{this.state.formMessage}</span>
      </div>
      { this.state.showLoading ? <Loader /> : null }
    </div>);
  }
}

QuestionReview.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
  data: React.PropTypes.object.isRequired,
};
