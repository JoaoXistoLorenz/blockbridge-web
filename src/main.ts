import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/fontawesome';
import './plugins/moment';
import './plugins/axios';
import './plugins/maskfilters';
import './scss/global.scss'
import './scss/responsive.scss'
import locale from 'element-ui/lib/locale/lang/pt-br';

Vue.config.productionTip = false;
Vue.use(ElementUI, {locale});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// remover warnings
// filtro por link
// ajustes de tela
// responsividade
// remover campos do db
// arrumar migrations
// ajustes finais