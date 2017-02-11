import React from 'react';
import _ from 'lodash';

import Template1 from './templates/template1';


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
    const Template = this.getTemplate(data.city);
    return !_.isEmpty(data) ? (<div className="container-fluid">
      <Template data={report} />
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
