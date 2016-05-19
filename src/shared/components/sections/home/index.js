/* eslint max-len: [2, 500, 4] */
import React from 'react';

// import Banner1 from './banner1';
// import Banner2 from './banner2';
import Block1 from './block1';
// import Block3 from './block3';
// import Block5 from './block5';
// import data from './data';
import data from './data';

export default class HomeSection extends React.Component {

  render() {
    return (<div>
      <Block1 data={data} />
    </div>);
  }
}
