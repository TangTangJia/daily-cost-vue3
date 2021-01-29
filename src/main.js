import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Tabbar, TabbarItem, Icon, Popup, DatetimePicker } from "vant";
import "vant/lib/index.css"; // 全局引入样式
import "./styles/index.less";
createApp(App)
  .use(store)
  .use(router)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Icon)
  .use(Popup)
  .use(DatetimePicker)
  .mount("#app");
