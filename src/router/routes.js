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
			{
				path: "custom",
				name: "custom",
				component: () => import("@/views/custom"),
			},
				{
				path: "confict",
				name: "confict",
				component: () => import("@/views/conflict"),
			},
		],
	},
];

export default routes;
