/* eslint max-len: [2, 500, 4] */
import React from 'react';

import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';
import data from './data';
const style = require('./style.scss');

export default class HomeSection extends React.Component {

  render() {
    return (<div className={style.mainWrapper}>
      <Block1 data={data} />
      <Block2 />
      <Block3 />
    </div>);
  }
}
