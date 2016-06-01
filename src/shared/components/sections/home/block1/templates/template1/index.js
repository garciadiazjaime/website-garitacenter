import React from 'react';
import Report1 from './report1';
import Report2 from './report2';

const style = require('./style.scss');


export default class Template1 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className={style.report}>
      <div className="row"><hr /></div>
      <Report1 data={data.report1} />
      <div className="row"><hr /></div>
      <Report2 data={data.report2} />
    </div>);
  }
}

Template1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
