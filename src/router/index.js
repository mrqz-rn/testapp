import Vue from "vue";
import VueRouter from "vue-router";


const routes = [
	{
		path: "/",
		alias: "/",
		name: "main",
		components: {
			default: () => import('@/views/main.vue')
		},
		meta: { title: "Main", isIdle: false },
	},
	
];

const router = new VueRouter({
	mode: process.env.VUE_APP_MODE,
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {
	next();
});

export default router;
