import React from 'react';
import _ from 'lodash';

const style = require('./style.scss');
import Template1 from './templates/template1';


export default class Block1 extends React.Component {

  getTemplate(data) {
    switch (data.toUpperCase()) {
      case 'TEMPLATE1':
        return Template1;
      default:
        return null;
    }
  }

  render() {
    const { data } = this.props;
    const Template = this.getTemplate(data.template);
    return !_.isEmpty(data) ? (<div className="container-fluid">
      <div className="pull-right">
        <div className={style.lastUpdate}>
          Reporte de Garitas actualizado hace 15 minutos
        </div>
      </div>
      <br className="clearfix" />
      <Template data={data} />
    </div>) : null;
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
