import AppHandler from '../../components/AppHandler';
import HomeSection from '../../components/sections/home';


export default {
  items: {
    component: AppHandler,
    default: HomeSection,
    children: [{
      title: 'Inicio',
      url: '/inicio',
      component: HomeSection,
    }],
  },
  icons: [{
    title: 'facebook',
    url: 'https://www.facebook.com/garitacenter/',
  }, {
    title: 'twitter',
    url: 'https://twitter.com/garitacenter',
  }, {
    title: 'googleplus',
    url: 'https://plus.google.com/102476216230239359040',
  }],
};
