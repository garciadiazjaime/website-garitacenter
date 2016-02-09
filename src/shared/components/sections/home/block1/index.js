import React from 'react';
import _ from 'lodash';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Template1 from '../templates/template1';


export default class Block1 extends React.Component {

  getTemplate(data) {
    switch (data.toUpperCase()) {
      case 'TEMPLATE1':
        return Template1;
      default:
        return null;
    }
  }

  renderReport(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        const Template = this.getTemplate(item.template);
        return Template ? (<div key={index}>
          <Template data={item} />
        </div>) : null;
      }, this);
    }
    return null;
  }

  render() {
    const { reports } = this.props.data;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-12">
          <h1 className={style.title}>Reporte de Garitas</h1>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className={style.lastUpdate}>
            <span>Actualizado </span>
            <span>hace 15 minutos</span>
          </div>
        </div>
      </div>
      { this.renderReport(reports) }
    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
