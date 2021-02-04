import { POST } from "./http";
const apiList = {
  login: data => POST("/user/login", data),
  register: data => POST("/user/register", data)
};

export default apiList;
