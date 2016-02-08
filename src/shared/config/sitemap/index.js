import AppHandler from '../../components/AppHandler';
import HomeSection from '../../components/sections/home';
// import AboutSection from '../../components/sections/about';


export default {
  items: {
    component: AppHandler,
    default: HomeSection,
    children: [{
      title: 'Tijuana / San Diego',
      url: '/',
      component: HomeSection,
    }],
  },
  icons: [],
  addresses: [],
};
