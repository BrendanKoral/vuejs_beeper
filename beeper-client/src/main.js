import Vue from 'vue'
import App from './App'
import Router from './routes';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: Router,
  template: '<App/>',
  components: { App }
})
