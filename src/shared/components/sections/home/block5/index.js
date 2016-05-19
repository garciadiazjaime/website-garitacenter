import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const style = require('./style.scss');

export default class Block5 extends React.Component {

  renderItems(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const { title, href, className } = item;
        return (<div className="col-sm-3 col-xs-12" key={index}>
          <div className={'row ' + style.wr7}>
            <div className={style[className]}>
            </div>
            <Link to={href} title={title} className={style.btn5}>
              <span>{title}</span>
            </Link>
          </div>
        </div>);
      });
    }
    return null;
  }

  render() {
    const { items, texts } = this.props.data;
    return (<div className="container-fluid">
      <div className={'row ' + style.pad45} >
        <h3 className={style.title5}>{texts.text1}</h3>
        <h2 className={style.title6}>{texts.text2}</h2>
      </div>
      <div className="row">
        {this.renderItems(items)}
      </div>
      </div>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
