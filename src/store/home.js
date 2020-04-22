import {
  requestHome
} from '../util/request.js'
const state = {
  home: {}, //首页状态

}
const mutations = {
  // 修改详情的状态
  setHome(state, home) {
    state.home = home;
  },
}
const actions = {
  // 请求首页的数据
  getHome(context) {
    requestHome().then(res => {
      console.log(res);

      // 根据数据，解构赋值
      context.commit("setHome",
        res.data.data
      )
    })
  },
}
const getters = {
  // 导出详情状态
  home(state) {
    return state.home
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
