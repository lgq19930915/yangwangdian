import Vue from "vue"
import {
  detail
} from '../util/request.js'
const state = {
  detail: {}, //首页状态

}
const mutations = {
  // 修改详情的状态
  setDetail(state, detail) {
    state.detail = detail;
    // 商品属性
    // 循环给商品属性加一个选中的标识
    state.detail.buySelect.forEach((item, index) => {
      item.selectIndex = 0;
      // Vue.set(state.detail.buySelect, index, item)
    });

  },
  // 商品属性
  // 修改商品属性  数据改了但是页面不渲染，使用Vue.set  $set splice去解决
  // 注意vuex遇到数据变了，页面不渲染2中方案1.splice;2.Vue.set
  btncls(state, params) {
    var [index, idx] = params;
    var item = state.detail.buySelect[index]
    item.selectIndex = idx
    Vue.set(state.detail.buySelect, index, item)
    // console.log(state.detail.buySelect)
  },

}
const actions = {
  // 请求首页的数据
  getDetail(context, id) {
    detail(id).then(res => {
      console.log(res);

      // 根据数据，解构赋值
      context.commit("setDetail", res.data.data)
    })
  },
  getbtncls(context, params) {


    context.commit("btncls", params)
  }
}
const getters = {
  // 导出详情状态
  detail(state) {
    return state.detail
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
