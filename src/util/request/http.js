import axios from "axios";
import { Toast } from "vant";
import router from "../../router";
// import store from '@/store'

// axios 配置
const root = process.env.VUE_APP_API_URL;
axios.defaults.timeout = 30 * 1000;
axios.defaults.baseURL = root;
axios.defaults.headers["Authorization"] = `${localStorage.getItem("token") ||
  null}`;

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据处理
  if (typeof response.data !== "object") {
    Toast.fail("服务端异常！");
    return Promise.reject(response);
  }
  if (response.data.code != 200) {
    if (response.data.msg) Toast.fail(response.data.msg);
    if (response.data.code == 401) {
      router.push({ path: "/login" });
    }
    return Promise.reject(response.data);
  }
  return response.data;
});

// GET 请求
export function GET (url, params) {
  return axios.get(url, {
    params: params
  });
}

// POST 请求
export function POST (url, data, params) {
  return axios.post(url, data, params);
}

// put 请求
export function PUT (url, data, params) {
  return axios.put(url, data, params);
}

// delete 请求
export function DELETE (url, data) {
  return axios.delete(url, data);
}
