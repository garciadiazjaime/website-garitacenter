import React from 'react';

import { minsToHrs, toTitleCase } from '../../../../../../utils/string';
const style = require('./style.scss');

export default class Report1 extends React.Component {

  render() {
    const { content, garita } = this.props.data;
    const { car, people } = content;
    return (<div>
      <div className="row">
        {/* Border */}
        <div className="col-xs-12">
          <h2>
            Garita de {toTitleCase(garita)}
          </h2>
        </div>
      </div>

      <div className={'row ' + style.headers}>
        {/* Headers */}
        <div className="col-xs-1"></div>
        <div className="col-xs-2 col-sm-2">
          <i className={style.car} />
          Normal
        </div>
        <div className="col-xs-2">
          <i className={style.carSentri} />
          Sentri
        </div>
        <div className="col-xs-2">
          <i className={style.carReadyLane} />
          R.&nbsp;Lane
        </div>
        <div className="col-xs-2">
          <i className={style.pedestrian} />
          Normal
        </div>
        <div className="col-xs-2">
          <i className={style.pedestrianReadyLane} />
          R.&nbsp;Lane
        </div>
      </div>

      {/* Times */}
      <div className={'row ' + style.times}>
        <div className="col-xs-1">
          <div className={style.clookWrapper}>
            <i className={style.clook} />
          </div>
        </div>
        <div className="col-xs-2 col-sm-2">
          {minsToHrs(car.normal.time)}
        </div>
        <div className="col-xs-2">
          {minsToHrs(car.sentry.time)}
        </div>
        <div className="col-xs-2">
          {minsToHrs(car.readyLine.time)}
        </div>
        <div className="col-xs-2">
          {minsToHrs(people.normal.time)}
        </div>
        <div className="col-xs-2">
          {minsToHrs(people.readyLine.time)}
        </div>
      </div>
    </div>);
  }
}

Report1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
