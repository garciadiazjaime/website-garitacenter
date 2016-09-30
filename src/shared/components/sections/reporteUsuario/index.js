/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router';

import RequestUtil from '../../../utils/requestUtil';
import { printTime, toTitleCase } from '../../../utils/string';
// import tweetsData from './tweetsData';
const style = require('./style.scss');

export default class ReporteUsuarioSection extends React.Component {

  constructor() {
    super();
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    RequestUtil.get('/user/report')
      .then((results) => {
        if (_.isArray(results.entity) && results.entity.length) {
          const newState = _.assign({}, this.state, {
            tweets: results.entity,
          });
          this.setState(newState);
        }
      });
    // /*eslint-disable */
    // const newState = _.assign({}, this.state, {
    //   tweets: tweetsData,
    // });
    // this.setState(newState);
    // /*eslint-enable */
  }

  renderTweets(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const className = index === 0 ? style.tweetFirst : style.tweet;
        const time = printTime(item.created);
        return (<div key={index} className="row">
          <div className="col-sm-12">
            <div className={className}>
              <div className={style.time}>
                Publicado a la{time.unity ? '' : 's'} {time.print}
              </div>
              <div>
                {toTitleCase(item.port)} - {toTitleCase(item.entry)} <br />
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
          <Link className={style.btn_report} to="/encuesta">¿Cómo te va en la línea?
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
