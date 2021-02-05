import { GET, POST } from "./http";
const apiList = {
  login: data => POST("/user/login", data),
  register: data => POST("/user/register", data),
  getAcountList: data => GET(`/bill/list?page_size=5`, data),
  getTypeList: () => GET("/type/list")
};

export default apiList;
