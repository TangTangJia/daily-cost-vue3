import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tabbar, TabbarItem } from "vant";
export default {};
import "vant/lib/index.css"; // 全局引入样式
createApp(App)
  .use(store)
  .use(router)
  .use(Tabbar)
  .use(TabbarItem)
  .mount("#app");
