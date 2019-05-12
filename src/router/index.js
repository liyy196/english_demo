import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home'
// 使用router插件vue.prototype.$router=Router;
Vue.use(Router)

export default new Router({
  routes: [
    {
      //路由规则
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
