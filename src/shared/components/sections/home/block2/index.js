import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block2 extends React.Component {

  render() {
    return (<div className="container-fluid">
      [ ads ]
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
