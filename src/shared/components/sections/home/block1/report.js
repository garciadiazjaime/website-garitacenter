import React from 'react';

export default class Report extends React.Component {

  render() {
    return (<div>

      <div className="row">
        <div className="col-md-2 col-xs-12">
          San Ysidro
        </div>
        <div className="col-md-2 col-xs-2">
          Normal
        </div>
        <div className="col-md-2 col-xs-2">
          Sentri
        </div>
        <div className="col-md-2 col-xs-2">
          Ready Lane
        </div>
        <div className="col-md-2 col-xs-2">
          Peatones
        </div>
        <div className="col-md-2 col-xs-2">
          Peatones
        </div>
      </div>

      <div className="row">
        <div className="col-md-2 hidden-xs">
          []
        </div>
        <div className="col-md-2 col-xs-2">
          1:10
        </div>
        <div className="col-md-2 col-xs-2">
          0:10
        </div>
        <div className="col-md-2 col-xs-2">
          0:20
        </div>
        <div className="col-md-2 col-xs-2">
          1:00
        </div>
        <div className="col-md-2 col-xs-2">
          1:00
        </div>
      </div>
    </div>);
  }
}
