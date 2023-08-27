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


Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')