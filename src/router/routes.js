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
			{
				path: "conflict1",
				name: "conflict1",
				component: () => import("@/views/conflict1"),
			},
		],
	},
];

export default routes;
