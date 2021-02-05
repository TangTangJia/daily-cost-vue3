import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Tabbar,
  TabbarItem,
  Icon,
  Popup,
  DatetimePicker,
  Progress,
  Button,
  Form,
  Field,
  Cell,
  CellGroup,
  NumberKeyboard
} from "vant";
import "vant/lib/index.css"; // 全局引入样式
import "./styles/index.less";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Icon);
app.use(Popup);
app.use(DatetimePicker);
app.use(Progress);
app.use(Button);
app.use(Field);
app.use(Cell);
app.use(CellGroup);
app.use(Form);
app.use(NumberKeyboard);
app.mount("#app");
