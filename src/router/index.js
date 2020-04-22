import Vue from 'vue'
import Router from 'vue-router'
// 


// @ts-ignore
import index from "../pages/index.vue"
// 首页的二级路由
// @ts-ignore
import home from "../pages/home.vue"
// @ts-ignore
import order from "../pages/order.vue"

// //分类的三级路由
// import muy from "../pages/muy.vue"
// import meif from "../pages/meif.vue"
// import jiaju from "../pages/jiaju.vue"
// import ship from "../pages/ship.vue"
// import quanq from "../pages/quanq.vue"


//购物车 我的
// @ts-ignore
import shopping from "../pages/shopping.vue"
// @ts-ignore
import mine from "../pages/mine.vue"

// 商品详情页
// @ts-ignore
import detail from '../pages/detail.vue'


// @ts-ignore
import login from "../pages/login.vue"
// @ts-ignore
import register from "../pages/register.vue"
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      component: login,
    },
    {
      path: '/index',
      component: index,
      children: [{
          path: 'home',
          component: home,
        },
        { //二级路由 分类
          path: 'order',
          component: order,
        },
        {
          path: 'shopping',
          component: shopping
        },
        {
          path: 'mine',
          component: mine
        },
        {
          path: "detail/:id",
          component: detail
        },
        {
          path: "",
          redirect: "home"
        }
      ]
    },
    {
      path: '/register',
      component: register
    },

    {
      path: "*",
      redirect: "/login"
    }
  ]
})
