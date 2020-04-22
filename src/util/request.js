import axios from "axios"
axios.interceptors.response.use(res => {
  console.log("这次请求地址是" + res.config.url);
  // console.log(res);
  return res;
})
// 基础路径
const baseUrl = "/api";
// 首页数据
export const requestHome = () => {
  return axios({
    url: baseUrl + "/getIndexData"
  })
}
// 注册
export const register = (phone, password) => {
  return axios({
    url: baseUrl + "/register",
    method: "post",

    data: {
      phone: phone,
      password: password,

    }

  })
}
// 登录
export const login = (phone, password) => {
  return axios({
    url: baseUrl + "/login",
    method: "get",
    params: {
      phone: phone,
      password: password
    }
  })
}
// 详情
export const detail = (id) => {
  return axios({
    url: baseUrl + "/getDetails",
    method: "get",
    params: {
      pid: id
    }
  })
}
// 分类
export const order = (id) => {
  return axios({
    url: baseUrl + "/getClassify",
    method: "get",
  })
}
