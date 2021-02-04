import axios from "axios";
import { getToken, setToken } from "../token";
import { Message } from "element-ui";
import router from "../../router";
import store from "@/store";
// import store from '@/store'

// axios 配置
const root = process.env.VUE_APP_API_URL;
axios.defaults.timeout = 30 * 1000;
axios.defaults.baseURL = root;

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    // 发送请求前处理
    if (getToken()) {
      config.headers.Authorization = getToken();
    }
    if (store.state.user.preview) {
      config.headers.Preview = store.state.user.preview;
    }
    config.headers.Accept = "application/x.myapp.v1+json";
    return config;
  },
  function (error) {
    // 请求错误处理
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 对响应数据处理
    const token = response.headers.authorization;
    if (token) {
      setToken(token);
    }
    return response.data;
  },
  function (error) {
    if (error.message.includes("timeout")) {
      Message.error("请求超时");
    } else if (error.response.status === 401) {
      // 登录失效
      const redirect = window.location.href;
      window.location.href =
        process.env.VUE_APP_AUTH_URL + "/login?redirect=" + redirect;
    } else if (error.response.status === 404) {
      router.push("/404");
      store.commit("SET_MORE", false);
    }
    // 响应错误处理
    return Promise.reject(error);
  }
);

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
