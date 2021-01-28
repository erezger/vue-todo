import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import i18n from './lang/lang';

import '@/assets/scss/index.scss';
import ListItem from '@/components/list-item.vue';

Vue.component('list-item', ListItem);

Vue.config.productionTip = false;

const eventsHub = new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app');

export {eventsHub};
