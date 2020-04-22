import Vue from "vue"

const state = {
  shopping: [], //购物车状态

}
const mutations = {
  // 添加状态
  addShop(state, json) {
    state.shopping.push(json);
    console.log(state.shopping);
  },
  // 自增
  add(state, index) {
    state.shopping[index].num++;
    if (state.shopping[index].num >= 999) {
      state.shopping[index].num = 999
    }
  },
  // 自减
  sub(state, index) {
    state.shopping[index].num--;
    if (state.shopping[index].num <= 0) {
      state.shopping[index].num = 0
    }
  }
}
const actions = {
  // 添加的actions
  addShop(context, json) {
    context.commit("addShop", json)
  },
  // 自增
  add(context, index) {
    context.commit("add", index)
  },
  // 自减
  sub(context, index) {
    context.commit("sub", index)
  }
}
const getters = {
  // 导出购物车状态
  shopping(state) {
    return state.shopping
  },
}
export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
