
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';


Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  store,
  components: {App},
  render: (h) => h(App),
}).$mount('#app');


