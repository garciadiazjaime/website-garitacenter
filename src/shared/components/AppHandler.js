import React from 'react';

import sitemap from '../config/sitemap';
import MainMenu from './layout/menu/menu1';
import MenuReport from './elements/menus/menuReport';
import Footer from './layout/footer/footer1';
import GaUtil from 'util-ganalytics';
const style = require('./style.scss');


export default class AppHandler extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: context.data ? context.data : window._data,
      showOnlyContentOn: '/encuesta',
    };
    this.gaUtil = new GaUtil('UA-75576478-1', false);
  }

  componentDidMount() {
    this.gaUtil.init();
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
