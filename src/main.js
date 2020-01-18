// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/globle.css'

/* 引入element-ui */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入全局axios请求数据
import axios from 'axios';
axios.defaults.baseURL = '';  //根地址
Vue.prototype.$http = axios;  //全局

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
