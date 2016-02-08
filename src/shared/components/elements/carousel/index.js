import React from 'react';
import _ from 'lodash';

export default class Carousel1 extends React.Component {

  renderIndicators(data, sliderID) {
    if (_.isArray(data) && data.length) {
      const bullets = data.map((slide, index) => {
        const c = !index ? 'active' : null;
        return (
          <li data-target={'#' + sliderID} data-slide-to={index} key={index} className={c}></li>
        );
      }, this);
      return (<ol className="carousel-indicators">
        { bullets }
      </ol>);
    }
    return null;
  }

  renderControls(data, sliderID) {
    return (<div>
      <a className="left carousel-control" href={'#' + sliderID} role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href={'#' + sliderID} role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>);
  }

  render() {
    const { sliderID, interval, showIndicators, showControls } = this.props.data;
    const slides = this.props.children.props.data;

    return (
      <div id={sliderID} className="carousel slide" data-ride="carousel" data-interval={interval}>

        { showIndicators ? this.renderIndicators(slides, sliderID) : null }

        { this.props.children }

        { showControls ? this.renderControls(slides, sliderID) : null }
      </div>
    );
  }
}

Carousel1.propTypes = {
  data: React.PropTypes.shape({
    sliderID: React.PropTypes.string.isRequired,
    interval: React.PropTypes.number.isRequired,
    showIndicators: React.PropTypes.bool.isRequired,
    showControls: React.PropTypes.bool.isRequired,
  }),
  children: React.PropTypes.any,
};
