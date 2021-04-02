const routes = [
	{
		path: "/",
		name: "home",
		redirect: "/index",
		component: () => import("@/views/home"),
		children: [
			{
				path: "index",
				name: "home",
				component: () => import("@/views/index"),
			},
		],
	},
];

export default routes;
