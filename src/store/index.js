import Vue from "vue"
import vuex, {
  Store
} from "vuex"
Vue.use(vuex)
// 引入home
import home from './home'
// 引入detail
import detail from './detail'
// 引入order 
import order from "./order"
// 引入购物车
import shop from "./shop"
// 状态
const state = {

}
// 同步修改state
const mutations = {

}
// 异步操作
const actions = {

}
// 导出状态给组件
const getters = {

}
// 创建一个仓库
const store = new Store({
  // 状态
  state,
  // 同步修改状态
  // @ts-ignore
  mutations,
  // 提交到mutations
  // @ts-ignore
  actions,
  //将状态统一导出给组件   
  // @ts-ignore
  getters,
  // 模块化
  modules: {
    home,
    detail,
    order,
    shop,
  }
})
export default store
