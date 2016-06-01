import React from 'react';

const style = require('./style.scss');

export default class Report2 extends React.Component {

  render() {
    const { titles, texts } = this.props.data;
    return (<div>
      <div className="row">
        {/* Border */}
        <div className="col-xs-12">
          <h2>
            Garita de {titles.title1}
          </h2>
        </div>
      </div>

      <div className={'row ' + style.headers}>
        {/* Headers */}
        <div className="col-xs-2">
          <i className={style.car} />
          {titles.title2}
        </div>
        <div className="col-xs-2">
          <i className={style.carSentri} />
          {titles.title3}
        </div>
        <div className="col-xs-3">
          <i className={style.carReadyLane} />
          {titles.title4}
        </div>
        <div className="col-xs-2">
          <i className={style.pedestrian} />
          {titles.title5}
        </div>
        <div className="col-xs-2">
          <i className={style.pedestrianSentri} />
          {titles.title6}
        </div>
      </div>

      {/* Times */}
      <div className={'row ' + style.times}>
        <div className="col-xs-2">
          {texts.text1}
        </div>
        <div className="col-xs-2">
          {texts.text2}
        </div>
        <div className="col-xs-3">
          {texts.text3}
        </div>
        <div className="col-xs-2">
          {texts.text4}
        </div>
        <div className="col-xs-2">
          {texts.text5}
        </div>
      </div>
    </div>);
  }
}

Report2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
