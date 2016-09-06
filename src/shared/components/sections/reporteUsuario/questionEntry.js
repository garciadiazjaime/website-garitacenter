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
      <div className="row">
        <div className="col-sm-12">
          <h2 className={style.heading2}>Por dónde cruzas?</h2>
          <h3 className={style.heading3}>San Ysidrio</h3>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="san_ysidro::carro::normal" clickHandler={this.clickHandler}>
            <SVG network="normal-lane" />
            Normal
          </ClickOption>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="san_ysidro::caro::ready_lane" clickHandler={this.clickHandler}>
            <SVG network="ready-lane" />
            R. Lane
          </ClickOption>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="san_ysidro::carro::sentri" clickHandler={this.clickHandler}>
            <SVG network="sentry-lane" />
            Sentri
          </ClickOption>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="san_ysidro::peatonal::normal" clickHandler={this.clickHandler}>
            <SVG network="normal-ped" />
            Normal
          </ClickOption>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="san_ysidro::peatonal::ready_lane" clickHandler={this.clickHandler}>
            <SVG network="ready-ped" />
            R. Lane
          </ClickOption>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12">
          <h3 className={style.heading3}>Otay</h3>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="otay::carro::normal" clickHandler={this.clickHandler}>
            <SVG network="normal-lane" />
            Normal
          </ClickOption>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="otay::carro::ready_lane" clickHandler={this.clickHandler}>
            <SVG network="ready-lane" />
            R. Lane
          </ClickOption>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="otay::carro::sentri" clickHandler={this.clickHandler}>
            <SVG network="sentry-lane" />
            Sentri
          </ClickOption>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="otay::peatonal::normal" clickHandler={this.clickHandler}>
            <SVG network="normal-ped" />
            Normal
          </ClickOption>
        </div>
        <div className="col-xs-4">
          <ClickOption className={style.btn_option} value="otay::peatonal::ready_lane" clickHandler={this.clickHandler}>
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
