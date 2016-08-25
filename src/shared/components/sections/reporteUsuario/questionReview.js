/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';
import Loader from '../../elements/loader';
import ClickOption from './clickOption';
import RequestUtil from '../../../utils/requestUtil';


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
    console.log('data', data);
    if (data && data.port && data.type && data.entry && data.place && data.time) {
      // remove data not related to survey
      delete data.view;
      this.setState(_.assign({}, this.state, {
        showLoading: true,
      }));
      RequestUtil.post(url, data).then((results) => {
        if (results) {
          if (results.entity.status) {
            this.props.clickHandler('QUESTION_SAVE');
          } else {
            this.renderInvalidResponse();
          }
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
