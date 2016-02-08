import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Report from './report';

export default class Block1 extends React.Component {

  render() {
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <h1>Reporte de Garitas</h1>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <span className="special_color_text">Actualizado </span>
          hace 15 minutos
        </div>
      </div>

      <Report />

      <Report />

    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
