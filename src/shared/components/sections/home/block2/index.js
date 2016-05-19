import React from 'react';
import { Link } from 'react-router';

const style = require('./style.scss');


export default class Block2 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className={style.wr6}>
      <div className={ 'container-fluid ' }>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-sm-offset-6">
            <div className={'row ' + style.wr1}>
              <h2>{texts.text1}</h2>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className={'row ' + style.hideOverflow}>
              <div className={style.image1}></div>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className={'row ' + style.wr2}>
              <h3 className={style.title2}>{texts.text2}</h3>
              <p className={style.par1}>{texts.text3}</p>
              <Link className={style.btn2} to={links.link1.href}>{links.link1.title}</Link>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className={'row ' + style.wr3}>
              <h3 className={style.title2}>{texts.text4}</h3>
              <p className={style.par1}>{texts.text5}</p>
              <Link className={style.btn2} to={links.link2.href}>{links.link2.title}</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <div className={'row ' + style.wr4}>
              <h4 className={style.title3}>{texts.text6}</h4>
              <h3 className={style.title2}>{texts.text7}</h3>
              <p className={style.par1}>{texts.text8}</p>
              <Link className={style.btn2} to={links.link3.href}>{links.link3.title}</Link>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className={'row ' + style.hideOverflow}>
              <div className={style.image2}></div>
            </div>
          </div>
          <div className="col-sm-3 col-xs-6">
            <div className={'row ' + style.wr5}>
              <h4 className={style.title3}>{texts.text9}</h4>
              <h3 className={style.title2}>{texts.text10}</h3>
              <Link className={style.btn3} to={links.link4.href}>{links.link4.title}</Link>
              <Link className={style.btn3} to={links.link5.href}>{links.link5.title}</Link>
              <Link className={style.btn3} to={links.link6.href}>{links.link6.title}</Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-xs-12">
            <h2 className={style.title4 + ' ' + style.max_width}>{texts.text11}</h2>
          </div>
        </div>
      </div>
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
