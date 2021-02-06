import { GET, POST } from "./http";
const $http = {
  login: data => POST("/user/login", data),
  register: data => POST("/user/register", data),
  getAcountList: data => GET(`/bill/list?page_size=10`, data),
  getTypeList: () => GET("/type/list"),
  addAccount: data => POST("/bill/add", data)
};

export default $http;
