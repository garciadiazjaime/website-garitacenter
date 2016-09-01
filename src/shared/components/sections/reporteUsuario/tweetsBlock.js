import React from 'react';
import _ from 'lodash';

import RequestUtil from '../../../utils/requestUtil';
import { timeSince } from '../../../utils/string';


export default class TweetsBlock extends React.Component {

  constructor() {
    super();
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    RequestUtil.get('/user/report')
      .then((results) => {
        if (_.isArray(results.entity) && results.entity.length) {
          const tweets = _.sortBy(results.entity, (item) => {
            return new Date(item.created_at);
          }).reverse();
          const newState = _.assign({}, this.state, {
            tweets,
          });
          this.setState(newState);
        }
      });
  }

  clickHandler() {
    this.props.clickHandler('QUESTION_ENTRY', {});
  }

  renderTweets(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index}>
          {item.text} <br />
          hace {timeSince(item.created_at)}
        </div>);
      });
    }
    return null;
  }

  render() {
    return (<div>
      <a className="btn btn-default" onClick={this.clickHandler}>Reportar</a>
      <br />
      { this.renderTweets(this.state.tweets) }
    </div>);
  }
}

TweetsBlock.propTypes = {
  clickHandler: React.PropTypes.func.isRequired,
};
