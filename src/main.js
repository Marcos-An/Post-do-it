import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import router from "./router";

import "vuesax/dist/vuesax.css";
Vue.config.productionTip = false;

Vue.use(Vuesax, {
  colors: {
    primary: "#5b3cc4",
    success: "rgb(23, 201, 100)",
    danger: "rgb(242, 19, 93)",
    warning: "rgb(255, 130, 0)",
    dark: "rgb(36, 33, 69)",
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
