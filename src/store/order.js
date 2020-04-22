import {
  order
} from '../util/request.js'
const state = {
  order: {}, //首页状态
}
const mutations = {
  // 修改详情的状态
  setOrder(state, order) {
    state.order = order;
  },
}
const actions = {
  // 请求分类的数据
  getOrder(context) {
    order().then(res => {
      console.log(res);

      // 根据数据，解构赋值
      context.commit("setOrder", res.data.data)
    })
  },
}
const getters = {
  // 导出详情状态
  order(state) {
    return state.order
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
