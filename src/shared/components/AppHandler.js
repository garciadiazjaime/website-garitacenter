import React from 'react';

import sitemap from '../config/sitemap';
import MainMenu from './layout/menu/menu1';
import MenuReport from './elements/menus/menuReport';
import Footer from './layout/footer/footer1';
import scrollUtil from '../utils/scroll';
import menuUtil from '../utils/menu';
const style = require('./style.scss');


export default class AppHandler extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: context.data ? context.data : window._data,
      showOnlyContentOn: '/encuesta',
    };
  }

  componentDidMount() {
    this.scrollHandler(true);
    // window.addEventListener('scroll', this.onScroll, false);
    this.googleAnalytics();
  }

  componentDidUpdate() {
    this.scrollHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const offset = window.pageYOffset;
    if (offset > 186) {
      $('#menu_wrapper').addClass('navbar-fixed-top');
    } else {
      $('#menu_wrapper').removeClass('navbar-fixed-top');
    }
  }

  googleAnalytics() {
    /*eslint-disable */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	  ga('create', 'UA-26633604-1', 'garitacenter.com');
	  ga('send', 'pageview');
    /*eslint-enable */
  }

  scrollHandler(isFirstTime) {
    const { location } = this.props;
    scrollUtil(location);
    if (!isFirstTime) {
      const bits = location.pathname.split('/');
      menuUtil(bits[1] || 'inicio');
    }
  }

  clickHandler() {
    if ($('.navbar-header button').is(':visible')) {
      $('.navbar-header button').click();
    }
  }

  renderFullContent(content) {
    return (<div>
      <MainMenu />
      <MenuReport location={this.props.location.pathname} />
      {content}
      <Footer items={sitemap.items.children} addresses={sitemap.addresses} icons={sitemap.icons}/>
    </div>);
  }

  renderJustContent(content) {
    return (<div>
      {content}
      <Footer items={sitemap.items.children} addresses={sitemap.addresses} icons={sitemap.icons}/>
    </div>);
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { data: this.state.data });
    });
    const { location } = this.props;
    const className = location.pathname.indexOf('encuesta') === -1 ? '' : style.background;
    return (<div className={className}>
      {
        this.props.location.pathname !== this.state.showOnlyContentOn ?
          this.renderFullContent(children) : this.renderJustContent(children)
      }
    </div>);
  }
}

AppHandler.propTypes = {
  children: React.PropTypes.object.isRequired,
  location: React.PropTypes.any,
  context: React.PropTypes.any,
  data: React.PropTypes.any,
};

AppHandler.contextTypes = {
  data: React.PropTypes.object,
};
