/* eslint max-len: [2, 500, 4] */

import React from 'react';
import ClickOption from './clickOption';
import SVG from '../../svg';

const style = require('./style.scss');

export default class QuestionPort extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(value) {
    const bits = value.split('::');
    const state = {
      port: bits[0],
      type: bits[1],
      entry: bits[2],
    };
    this.props.clickHandler('QUESTION_PLACE', state);
  }

  render() {
    return (<div className="container-fluid">
      Por dónde cruzas?
      <div className="row">
        <div className="col-sm-12">
          San Ysidrio
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="san_ysidro::car::normal" clickHandler={this.clickHandler}>
            <SVG network="normal-lane" />
            Normal
          </ClickOption>
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="san_ysidro::car::ready_lane" clickHandler={this.clickHandler}>
            <SVG network="ready-lane" />
            R. Lane
          </ClickOption>
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="san_ysidro::car::sentri" clickHandler={this.clickHandler}>
            <SVG network="sentry-lane" />
            Sentri
          </ClickOption>
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="san_ysidro::person::normal" clickHandler={this.clickHandler}>
            <SVG network="normal-ped" />
            Normal
          </ClickOption>
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="san_ysidro::person::ready_lane" clickHandler={this.clickHandler}>
            <SVG network="ready-ped" />
            R. Lane
          </ClickOption>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          Otay
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="otay::car::normal" clickHandler={this.clickHandler}>
            <SVG network="normal-lane" />
            Normal
          </ClickOption>
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="otay::car::ready_lane" clickHandler={this.clickHandler}>
            <SVG network="ready-lane" />
            R. Lane
          </ClickOption>
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="otay::car::sentri" clickHandler={this.clickHandler}>
            <SVG network="sentry-lane" />
            Sentri
          </ClickOption>
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="otay::person::normal" clickHandler={this.clickHandler}>
            <SVG network="normal-ped" />
            Normal
          </ClickOption>
        </div>
        <div className="col-sm-4">
          <ClickOption className={style.btn_option} value="otay::person::ready_lane" clickHandler={this.clickHandler}>
            <SVG network="ready-ped" />
            R.Lane
          </ClickOption>
        </div>
      </div>
    </div>);
  }
}

QuestionPort.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
};
