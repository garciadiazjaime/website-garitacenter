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
    url: 'https://www.facebook.com/',
  }, {
    title: 'twitter',
    url: 'https://www.twitter.com/',
  }, {
    title: 'google',
    url: 'https://www.google.com/',
  }],
};
