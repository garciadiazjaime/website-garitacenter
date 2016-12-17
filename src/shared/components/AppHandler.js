import React from 'react';

import sitemap from '../config/sitemap';
import MainMenu from './layout/menu/menu1';
import MenuReport from './elements/menus/menuReport';
import Footer from './layout/footer/footer1';
import scrollUtil from '../utils/scroll';
import menuUtil from '../utils/menu';
import UtilGAnalytics from 'util-ganalytics'
const style = require('./style.scss');


export default class AppHandler extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: context.data ? context.data : window._data,
      showOnlyContentOn: '/encuesta',
    };
    this.googleAnalytics = new UtilGAnalytics('UA-26633604-1', false);
  }

  componentDidMount() {
    this.scrollHandler(true);
    this.googleAnalytics.init();
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
