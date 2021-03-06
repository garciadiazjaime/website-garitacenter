/* eslint max-len: [2, 500, 4] */
import React from 'react';

import GaUtilAdapter from '../adapters/gaUtilAdapter';
import sitemap from '../config/sitemap';
import Header from './layout/header';
import MenuReport from './elements/menus/menuReport';
import MenuCities from './elements/menus/menuCities';
import Footer from './layout/footer/footer1';

export default class AppHandler extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data: context.data ? context.data : window._data,
    };
  }

  componentDidMount() {
    GaUtilAdapter.init();
  }

  render() {
    const children = React.Children.map(this.props.children, (child) => React.cloneElement(child, { data: this.state.data }));
    return (<div>
      <Header city="Tijuana / San Diego" />
      <MenuCities />
      <MenuReport location={this.props.location.pathname} />
      {children}
      <Footer icons={sitemap.icons}/>
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
