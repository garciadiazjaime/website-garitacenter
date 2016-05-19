import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block3 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <div className={'row ' + style.pad45} >
              <div className={style.image3}></div>
              <p className={style.par2}>{texts.text1}</p>
              <p className={style.par2}>
                {texts.text2}<b>{texts.text3}</b>
              </p>
              <Link className={style.btn4red} to={links.link1.href} title={links.link1.title}>
                {links.link1.title}
              </Link>
              <p className={style.par2}>
                <span>{texts.text4}</span>
                <span>{texts.text5}</span>
                <span>{texts.text6}</span>
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className={style.image4}></div>
          </div>
        </div>
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
