/* eslint max-len: [2, 500, 4] */
import React from 'react';
import { Link } from 'react-router';

import GaUtilAdapter from '../../../adapters/gaUtilAdapter';
import RequestUtil from '../../../utils/requestUtil';
import { printTime, toTitleCase } from '../../../utils/string';
import tweetsData from './tweetsData';
const style = require('./style.scss');
const enable = process.env.TIER !== 'FE';

export default class ReporteUsuarioSection extends React.Component {

  constructor() {
    super();
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    if (enable) {
      RequestUtil.get('/user/report')
        .then((results) => {
          if (results.entity === Array && results.entity.length) {
            const newState = Object.assign({}, this.state, {
              tweets: results.entity,
            });
            this.setState(newState);
          }
        });
    } else {
      // for testing purpose
      /*eslint-disable */
      const newState = Object.assign({}, this.state, {
        tweets: tweetsData,
      });
      this.setState(newState);
      /*eslint-enable */
    }
  }

  clickHandler() {
    GaUtilAdapter.sendEvent('survey', 'click', 'start');
  }

  renderTweets(data) {
    if (data.constructor === Array && data.length) {
      return data.map((item, index) => {
        const date = new Date(item.created);
        // adjust to Tijuana time
        const time = printTime(date.setHours(date.getHours() - 2));
        const className = time.recent < 61 ? style.tweetFirst : style.tweet;
        return (<div key={index} className="row">
          <div className="col-sm-12">
            <div className={className}>
              <div className={style.time}>
                Reporte a la{time.unity ? '' : 's'} {time.print}
              </div>
              <div>
                Garita {toTitleCase(item.port)} - {toTitleCase(item.entry)} - {toTitleCase(item.type)} <br />
                {toTitleCase(item.place)} <br />
                Llevo esperando {toTitleCase(item.time)}
              </div>
            </div>
          </div>
        </div>);
      });
    }
    return null;
  }

  render() {
    return (<div className={style.report}>
      <div className="container-fluid">
        <div className="row">
          <Link className={style.btn_report} to="/encuesta" onClick={this.clickHandler}>¿Cómo te va en la línea?
            <span className={style.subtitle}>
              Repórtalo aquí y ayuda a los demás
            </span>
          </Link>
        </div>
        { this.renderTweets(this.state.tweets) }
      </div>
    </div>);
  }
}
