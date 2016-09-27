import React from 'react';
import { minsToHrs, toTitleCase } from '../../../../../../utils/string';
const style = require('./style.scss');


export default class Template1 extends React.Component {

  renderTime(data) {
    const addMinsFix = 20;
    const mins = parseInt(data, 10) || 0;
    const adjustTime = mins + addMinsFix;
    return minsToHrs(adjustTime);
  }

  render() {
    const { data } = this.props;
    const port1 = data[0];
    const port2 = data[1];

    return (<div className={style.report}>
      <div className="row">
        <div className="col-xs-3">
          <i className={style.clook} />
        </div>
        <div className="col-xs-5">
          <h2>{toTitleCase(port1.garita)}</h2>
        </div>
        <div className="col-xs-4">
          <h2>{toTitleCase(port2.garita)}</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-xs-3">
          <div className={style.icon}>
            <i className={style.car} />
            Normal
          </div>
        </div>
        <div className="col-xs-5">
          <div className={style.port1}>
            {this.renderTime(port1.content.car.normal.time)}
          </div>
        </div>
        <div className="col-xs-4">
          <div className={style.port2}>
            {this.renderTime(port2.content.car.normal.time)}
          </div>
        </div>
      </div>

      <div className={style.hr} />

      <div className="row">
        <div className="col-xs-3">
          <div className={style.icon}>
            <i className={style.carReadyLane} />
            R.&nbsp;Lane
          </div>
        </div>
        <div className="col-xs-5">
          <div className={style.port1}>
            {this.renderTime(port1.content.car.readyLine.time)}
          </div>
        </div>
        <div className="col-xs-4">
          <div className={style.port2}>
            {this.renderTime(port2.content.car.readyLine.time)}
          </div>
        </div>
      </div>

      <div className={style.hr} />

      <div className="row">
        <div className="col-xs-3">
          <div className={style.icon}>
            <i className={style.carSentri} />
            Sentri
          </div>
        </div>
        <div className="col-xs-5">
          <div className={style.port1}>
            {this.renderTime(port1.content.car.sentry.time)}
          </div>
        </div>
        <div className="col-xs-4">
          <div className={style.port2}>
            {this.renderTime(port2.content.car.sentry.time)}
          </div>
        </div>
      </div>

      <div className="row"><div className={style.br} /></div>

      <div className="row">
        <div className="col-xs-3">
          <div className={style.icon}>
            <i className={style.pedestrian} />
            Normal
          </div>
        </div>
        <div className="col-xs-5">
          <div className={style.port1}>
            {this.renderTime(port1.content.people.normal.time)}
          </div>
        </div>
        <div className="col-xs-4">
          <div className={style.port2}>
            {this.renderTime(port2.content.people.normal.time)}
          </div>
        </div>
      </div>

      <div className={style.hr} />

      <div className="row">
        <div className="col-xs-3">
          <div className={style.icon}>
            <i className={style.pedestrianReadyLane} />
            R.&nbsp;Lane
          </div>
        </div>
        <div className="col-xs-5">
          <div className={style.port1}>
            {this.renderTime(port1.content.people.readyLine.time)}
          </div>
        </div>
        <div className="col-xs-4">
          <div className={style.port2}>
            {this.renderTime(port2.content.people.readyLine.time)}
          </div>
        </div>
      </div>

      <div className={style.hr} />

      <div className="row">
        <div className="col-xs-3">
          <div className={style.icon}>
            <i className={style.pedestrian} />
            Pedwest
          </div>
        </div>
        <div className="col-xs-5">
          <div className={style.port1}>
            {this.renderTime(port1.content.people.readyLine.time)}
          </div>
        </div>
      </div>

      <div className={'row ' + style.times}>
      </div>

    </div>);
  }
}

Template1.propTypes = {
  data: React.PropTypes.array.isRequired,
};
