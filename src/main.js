import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import ourRoutes from './our-routes.js';
import vuetify from './plugins/vuetify';
import(/* webpackPrefetch: true */  'typeface-roboto/index.css');
const VueHead = require('vue-head')

Vue.use(VueHead)
Vue.use(VueRouter);

Vue.config.productionTip = false


const router = new VueRouter({
  mode: 'history',

  routes: ourRoutes
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')