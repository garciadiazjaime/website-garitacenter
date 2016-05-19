import React from 'react';

const style = require('./style.scss');


export default class Template1 extends React.Component {

  render() {
    const { headers, times } = this.props.data;
    return (<div className={style.report}>
      <div className="row">
        {/* Border */}
        <div className="col-md-2 col-xs-12">
          <h2 className={style.subtitle}>
            <span>Garita de </span>
            {headers.header1}
          </h2>
        </div>

        {/* Headers */}
        <div className="col-md-2 col-xs-2">
          <i className={style.carNormal} />
          {headers.header2}
        </div>
        <div className="col-md-2 col-xs-2">
        <i className={style.carSentri} />
          {headers.header3}
        </div>
        <div className="col-md-2 col-xs-3">
        <i className={style.carReadyLane} />
          {headers.header4}
        </div>
        <div className="col-md-2 col-xs-2">
          <i className={style.pedestrianNormal} />
          {headers.header5}
        </div>
        <div className="col-md-2 col-xs-2">
          <i className={style.pedestrianSentri} />
          {headers.header6}
        </div>
      </div>

      {/* Times */}
      <div className={'row ' + style.times}>
        <div className="col-md-2 hidden-xs">
          {times.time1}
        </div>
        <div className="col-md-2 col-xs-2">
          {times.time2}
        </div>
        <div className="col-md-2 col-xs-2">
          {times.time3}
        </div>
        <div className="col-md-2 col-xs-3">
          {times.time4}
        </div>
        <div className="col-md-2 col-xs-2">
          {times.time5}
        </div>
        <div className="col-md-2 col-xs-2">
          {times.time6}
        </div>
      </div>
    </div>);
  }
}

Template1.propTypes = {
  data: React.PropTypes.shape({
    headers: React.PropTypes.object.isRequired,
    times: React.PropTypes.object.isRequired,
  }),
};
