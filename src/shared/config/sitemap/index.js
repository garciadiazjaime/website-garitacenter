import AppHandler from '../../components/AppHandler';
import HomeSection from '../../components/sections/home';
import ReporteUsuarioSection from '../../components/sections/reporteUsuario';
import SurveySection from '../../components/sections/survey';
import SalesSection from '../../components/sections/sales';

export default {
  items: {
    component: AppHandler,
    default: HomeSection,
    children: [{
      title: 'Inicio',
      url: '/inicio',
      component: HomeSection,
    }, {
      title: 'Reporte de Usuario',
      url: '/reporte-usuario',
      component: ReporteUsuarioSection,
    }, {
      title: 'Forma Reporte de Usuario',
      url: '/encuesta',
      component: SurveySection,
    }, {
      title: 'Anúnciate aquí',
      url: '/publicidad',
      component: SalesSection,
    }],
  },
  icons: [{
    title: 'facebook',
    url: 'https://www.facebook.com/garitacenter/',
  }, {
    title: 'twitter',
    url: 'https://twitter.com/garita_center',
  }, {
    title: 'googleplus',
    url: 'https://plus.google.com/102476216230239359040',
  }],
};
