// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入仓库
import store from "./store"

//reset.css 
import "./assets/css/reset.css"
import "./assets/css/iconfont.css"
// rem.js
import "./assets/js/rem"
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//全局组件
import common from "./common"
for (var i in common) {
  Vue.component(i, common[i])
}
// 全局过滤器
import filter from './filters/index'
for (var i in filter) {
  Vue.filter(i, filter[i])
}
// window.close(localStorage.removeItem("tel"))
// window.close(localStorage.removeItem("pass"))
// 全局守卫
router.beforeEach((to, from, next) => {
  if (to.path === "/login" || to.path === "/register") {
    next()
    return
  }
  var tel = localStorage.getItem("tel"); //登陆了，会取到用户名；没有登录，会取到null
  var pass = localStorage.getItem("pass");
  if (tel && pass) { //取到了值，代表登陆了
    next();
    return;
  }
  next("/login")

})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>',
  store
})
