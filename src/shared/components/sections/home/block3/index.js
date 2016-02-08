import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block3 extends React.Component {

  render() {
    return (<div className="container-fluid">
        [ stats ]
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
