import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.use(Worker);

new Vue({
	router,
	render: (h) => h(App),
}).$mount("#app");
