import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import * as echarts from "echarts";
import store from "@/store";
// console.log(echarts);
Vue.config.productionTip = false;

Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

new Vue({
	router,
	store,
	render: (h) => h(App),
	created() {},
}).$mount("#app");
