import React from 'react';
import _ from 'lodash';

const style = require('./style.scss');
import Template1 from './templates/template1';
import { timeSince } from '../../../../utils/string';


export default class Block1 extends React.Component {

  getTemplate(data) {
    switch (data.toUpperCase()) {
      case 'TIJUANA':
        return Template1;
      default:
        return null;
    }
  }

  render() {
    const { data } = this.props;
    const { report } = data;
    const created = report[0].created;
    const Template = this.getTemplate(data.city);
    return !_.isEmpty(data) ? (<div className="container-fluid">
      <div>
        <div className={style.lastUpdate}>
          Reporte de Garitas actualizado hace {timeSince(created)}
        </div>
      </div>
      <Template data={report} />
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
