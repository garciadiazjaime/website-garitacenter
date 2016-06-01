/* eslint max-len: [2, 1000, 4] */
import React from 'react';

export default class SVG extends React.Component {
  renderItems(network, className) {
    switch (network) {
      case 'facebook':
        return (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" className={className}>
          <circle cx="15" cy="15" r="15" />
          <path d="M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z" fill="#fff"/>
        </svg>);
      case 'twitter':
        return (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className={className}>
          <circle cx="15" cy="15" r="15"/>
          <path d="M23.5 9.7c-0.6 0.3-1.3 0.5-2 0.5 0.7-0.4 1.3-1.1 1.5-1.9 -0.7 0.4-1.4 0.7-2.2 0.8 -0.6-0.7-1.5-1.1-2.5-1.1 -1.9 0-3.5 1.6-3.5 3.5 0 0.3 0 0.5 0.1 0.8 -2.9-0.1-5.5-1.5-7.2-3.6 -0.3 0.5-0.5 1.1-0.5 1.8 0 1.2 0.6 2.3 1.6 2.9 -0.6 0-1.1-0.2-1.6-0.4 0 0 0 0 0 0 0 1.7 1.2 3.1 2.8 3.4 -0.3 0.1-0.6 0.1-0.9 0.1 -0.2 0-0.4 0-0.7-0.1 0.4 1.4 1.7 2.4 3.3 2.4 -1.2 0.9-2.7 1.5-4.3 1.5 -0.3 0-0.6 0-0.8 0 1.5 1 3.4 1.6 5.3 1.6 6.4 0 9.9-5.3 9.9-9.9 0-0.1 0-0.3 0-0.4C22.4 11 23 10.4 23.5 9.7z"/>
        </svg>);
      case 'pinterest':
        return (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className={className}>
          <circle className={this.props.background} cx="15" cy="15" r="15"/>
          <path d="M14.4 18.1c-0.5 2.6-1.1 5.1-2.9 6.4 -0.6-4 0.8-6.9 1.5-10.1 -1.1-1.8 0.1-5.5 2.4-4.6 2.8 1.1-2.4 6.8 1.1 7.5 3.7 0.8 5.2-6.4 2.9-8.8 -3.3-3.4-9.7-0.1-8.9 4.8 0.2 1.2 1.4 1.5 0.5 3.2 -2.1-0.5-2.8-2.1-2.7-4.4 0.1-3.7 3.3-6.2 6.5-6.6 4-0.4 7.8 1.5 8.3 5.2 0.6 4.2-1.8 8.8-6.1 8.5C15.8 19.2 15.4 18.6 14.4 18.1"/>
        </svg>);
      case 'instagram':
        return (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className={className}>
          <circle cx="15" cy="15" r="15"/>
          <path d="M20.6 7H9.4c-1.3 0-2.4 0.9-2.4 2.1v11.8c0 1.2 1.1 2.1 2.4 2.1h11.3c1.3 0 2.4-0.9 2.4-2.1V9.1C23 7.9 22 7 20.6 7zM18.6 9.2c0-0.3 0.2-0.5 0.5-0.5h1.7c0.3 0 0.5 0.2 0.5 0.5v1.7c0 0.3-0.2 0.5-0.5 0.5h-1.7c-0.3 0-0.5-0.2-0.5-0.5V9.2zM17.7 11.7v0c0 0 0 0 0 0H17.7zM14.9 12c2 0 3.5 1.6 3.5 3.5 0 2-1.6 3.5-3.5 3.5 -2 0-3.5-1.6-3.5-3.5C11.4 13.6 13 12 14.9 12zM22 20.7c0 0.8-0.6 1.4-1.4 1.4H9.3c-0.8 0-1.4-0.6-1.4-1.4V13.3h2.9c-0.3 0.7-0.5 1.4-0.5 2.2 0 2.6 2.1 4.7 4.7 4.7 2.6 0 4.7-2.1 4.7-4.7 0-0.7-0.2-1.4-0.5-2h2.8V20.7z"/>
        </svg>);
      case 'google':
        return (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 30 30" className={className}>
          <circle cx="15" cy="15" r="15" />
          <path d="M276.5 746.3c2.1 0 4.2-0.1 6.4 0.1 0.7 0.1 1 0.3 1.1 1 0.8 7.7-3.6 13.7-11.1 15.2 -7.6 1.5-15.7-4.1-16.8-11.8 -1.2-8.1 4.4-15.7 12.3-16.6 4-0.5 7.6 0.5 10.8 2.9 0.7 0.5 0.8 0.8 0.1 1.4 -0.9 0.8-1.8 1.8-2.7 2.6 -0.4 0.4-0.6 0.6-1.2 0.1 -3-2.3-6.9-2.3-10.1-0.2 -3 2-4.5 5.9-3.6 9.4 1 3.9 4 6.5 7.8 6.8 3.8 0.3 7.1-1.5 8.4-4.7 0.4-0.9 0.4-1.3-0.8-1.3 -2 0.1-3.9 0-5.9 0 -0.9 0-1.2-0.2-1.1-1.1 0.1-1 0-2.1-0.1-3.1 0-0.7 0.2-0.9 0.9-0.9C272.7 746.3 274.6 746.3 276.5 746.3z" fill="#fff"/>
        </svg>);
      case 'foursquare':
        return (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="244.9 723.5 50 49.9">
            <circle cx="269.9" cy="748.4" r="25" fill="#f64d78"/>
            <path d="M280.2 733.6c0 0-14.5 0-16.8 0s-3 1.8-3 2.9c0 1.1 0 26.8 0 26.8 0 1.2 0.7 1.7 1 1.9 0.4 0.2 1.4 0.3 2-0.4 0 0 7.9-9.2 8.1-9.4 0.2-0.2 0.2-0.2 0.4-0.2 0.4 0 3.5 0 5.1 0 2.2 0 2.5-1.5 2.7-2.5 0.2-0.8 2.3-11.6 3-15C283.3 735 282.6 733.6 280.2 733.6zM279.8 752.6c0.2-0.8 2.3-11.6 3-15M279.2 738.1l-0.7 3.7c-0.1 0.4-0.6 0.8-1 0.8 -0.5 0-6.8 0-6.8 0 -0.7 0-1.3 0.4-1.3 1.2v0.9c0 0.7 0.5 1.3 1.3 1.3 0 0 5.3 0 5.8 0 0.5 0 1 0.6 0.9 1.1 -0.1 0.6-0.6 3.3-0.7 3.6 -0.1 0.3-0.4 0.8-1 0.8 -0.5 0-4.5 0-4.5 0 -0.8 0-1.1 0.1-1.6 0.8 -0.6 0.7-5.5 6.7-5.5 6.7 0 0.1-0.1 0-0.1 0v-20.9c0-0.5 0.4-1 1-1 0 0 13 0 13.5 0C278.8 737.1 279.3 737.5 279.2 738.1z" fill="#FFF"/>
          </svg>);
      case 'yelp':
        return (<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="244.9 723.5 50 49.9">
          <circle cx="269.9" cy="748.4" r="25" fill="#bc341f"/>
          <path d="M264 741.2c-1.1-1.8-2.2-3.5-3.2-5.3 -0.6-1-0.4-1.6 0.6-2.2 1.7-0.9 3.5-1.3 5.4-1.7 0.3-0.1 0.7-0.1 1-0.1 1.2-0.1 1.7 0.4 1.7 1.6 0.2 3.2 0.4 6.4 0.7 9.6 -0.1 0.9 0.2 1.8 0.1 2.8 -0.1 1.1-0.4 1.5-1.3 1.7 -0.8 0.2-1.2-0.5-1.6-1 -1-1.6-2-3.2-3-4.8C264.2 741.6 264.1 741.4 264 741.2z" fill="#fff"/>
          <path d="M276 743.2c0.4-0.3 0.7-0.8 1-1.1 0.5-0.6 1.1-0.7 1.8-0.2 0.4 0.3 0.8 0.7 1.1 1.1 0.6 0.9 1.3 1.8 1.7 2.7 0.2 0.4 0.4 0.9 0.5 1.4 0.1 0.7-0.1 1.2-0.8 1.4 -2.3 0.7-4.7 1.3-7 1.8 -0.8 0.2-1.2-0.1-1.6-0.7 -0.4-0.6-0.3-1.2 0.1-1.8C273.8 746.4 275 744.8 276 743.2z" fill="#fff"/>
          <path d="M257.7 751.5c0-1.1 0.1-2.1 0.3-3.1 0.2-1.1 0.9-1.5 1.9-1.1 2.2 0.9 4.4 1.8 6.6 2.7 0.6 0.3 0.9 0.8 0.8 1.4 0 0.6-0.3 1.1-0.9 1.3 -2.3 0.7-4.5 1.5-6.8 2.2 -0.9 0.3-1.4 0-1.7-0.9 0-0.2-0.1-0.3-0.1-0.5C257.7 752.8 257.7 752.2 257.7 751.5z" fill="#fff"/>
          <path d="M272.7 754.6c0-1 0.9-1.7 1.9-1.4 2.2 0.7 4.4 1.5 6.6 2.2 1 0.4 1.3 1 0.9 2 -0.8 1.7-1.9 3.2-3.4 4.4 -0.8 0.7-1.5 0.6-2.1-0.3 -1.3-2-2.5-4-3.7-6.1C272.8 755.2 272.7 754.9 272.7 754.6z" fill="#fff"/>
          <path d="M270.1 759.7c0 1.2 0 2.4 0 3.6 0 1-0.5 1.5-1.5 1.4 -1.9-0.2-3.7-0.9-5.3-2 -0.8-0.6-0.9-1.2-0.3-1.9 1.5-1.9 3.1-3.7 4.6-5.6 0.4-0.5 1-0.6 1.6-0.4 0.6 0.2 0.9 0.6 0.9 1.3 0 1.2 0 2.5 0 3.7C270.1 759.7 270.1 759.7 270.1 759.7z" fill="#fff"/>
        </svg>);
      default:
        return (<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className={className}>
          <circle cx="15" cy="15" r="15"/>
          <path d="M16.6 25.1v-9.2h3.2l0.5-3.6h-3.7v-2.3c0-1 0.3-1.7 1.9-1.7l2 0V5.1c-0.3 0-1.5-0.1-2.9-0.1 -2.9 0-4.8 1.7-4.8 4.7v2.6H9.5v3.6h3.2v9.2H16.6z" fill="#fff"/></svg>);
    }
  }

  render() {
    return (this.renderItems(this.props.network, this.props.className));
  }
}
SVG.propTypes = {
  background: React.PropTypes.string,
  color: React.PropTypes.string,
  network: React.PropTypes.string,
  className: React.PropTypes.string,
};
