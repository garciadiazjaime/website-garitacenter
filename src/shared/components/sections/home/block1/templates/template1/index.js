import React from 'react';
import Report1 from './report1';

const style = require('./style.scss');


export default class Template1 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className={style.report}>
      <div className="row"><hr className={style.customHr} /></div>
      <Report1 data={data[0]} />
      <br />
      <Report1 data={data[1]} />
    </div>);
  }
}

Template1.propTypes = {
  data: React.PropTypes.array.isRequired,
};
