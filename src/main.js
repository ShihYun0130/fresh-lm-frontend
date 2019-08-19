import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './router.js';
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://localhost:5000'
  // options: { path: "/my-app/" } //Optional options
}))

Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
