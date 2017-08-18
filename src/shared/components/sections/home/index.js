/* eslint max-len: [2, 500, 4] */
import React from 'react';

import Block1 from './block1';
import Block2 from './block2';
import { timeSince } from '../../../utils/string';
const style = require('./style.scss');


export default class HomeSection extends React.Component {

  render() {
    const { data } = this.props;
    const { report } = data;
    const created = report.constructor === Array && report.length && report[0] ? report[0].created : '';
    return (<div>
      <Block1 data={data} />
      <Block2 />
      <div className={style.lastUpdate}>
        Reporte de Garitas actualizado hace {timeSince(created)}
      </div>
    </div>);
  }
}

HomeSection.propTypes = {
  data: React.PropTypes.object,
};
