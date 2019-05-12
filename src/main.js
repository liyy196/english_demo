// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import '../static/css/global.css'


// 使用mint-ui引入全部的组件
import Mint from 'mint-ui';

Vue.use(Mint);
import 'mint-ui/lib/style.css';
// // 配置公共的URL
// Axios.defaults.baseURL='http://www.sinya.online.api/';
// // 配置axios
Vue.prototype.$axios=Axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
