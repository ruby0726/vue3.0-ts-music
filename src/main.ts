import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "../src/assets/fix.css"

// 图标字体
import '@/assets/iconfont/iconfont.css'
// 公用样式
import '@/assets/style/index.scss'

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
