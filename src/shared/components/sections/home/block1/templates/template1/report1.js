import React from 'react';

const style = require('./style.scss');

export default class Report1 extends React.Component {

  render() {
    const { titles, texts } = this.props.data;
    return (<div>
      <div className="row">
        {/* Border */}
        <div className="col-md-2 col-xs-12">
          <h2 className={style.subtitle}>
            <span>Garita de </span>
            {titles.titles1}
          </h2>
        </div>

        {/* Headers */}
        <div className="col-md-2 col-xs-2">
          <i className={style.carNormal} />
          {titles.title1}
        </div>
        <div className="col-md-2 col-xs-2">
        <i className={style.carSentri} />
          {titles.title2}
        </div>
        <div className="col-md-2 col-xs-3">
        <i className={style.carReadyLane} />
          {titles.title3}
        </div>
        <div className="col-md-2 col-xs-2">
          <i className={style.pedestrianNormal} />
          {titles.title4}
        </div>
        <div className="col-md-2 col-xs-2">
          <i className={style.pedestrianSentri} />
          {titles.title5}
        </div>
      </div>

      {/* Times */}
      <div className={'row ' + style.times}>
        <div className="col-md-2 hidden-xs">
          {texts.text1}
        </div>
        <div className="col-md-2 col-xs-2">
          {texts.text2}
        </div>
        <div className="col-md-2 col-xs-2">
          {texts.text3}
        </div>
        <div className="col-md-2 col-xs-3">
          {texts.text4}
        </div>
        <div className="col-md-2 col-xs-2">
          {texts.text5}
        </div>
        <div className="col-md-2 col-xs-2">
          {texts.text6}
        </div>
      </div>
    </div>);
  }
}

Report1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
