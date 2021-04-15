<template>
	<el-table-column v-bind="base" :align="align">
		<template slot="header" slot-scope="scope">
			<expand-header :scope="scope"></expand-header>
		</template>
		<template slot-scope="scope">
			<expand-content :scope="scope"></expand-content>
		</template>
	</el-table-column>
</template>

<script>
export default {
	name: "table-column",
	props: {
		align: {
			type: String,
			default: "",
		},
		base: {
			type: Object,
			requred: true,
		},
	},
	data() {
		return {};
	},
	components: {
		expandHeader: {
			functional: true,
			name: "expand-header",
			inject: ["context"],
			render(h, ctx) {
				let column = ctx.parent.base.prop;
				let scoped = ctx.injections.context.$scopedSlots;
				let props = ctx.props.scope;
				let params = {
					row: props.row,
					index: props.$index,
				};
				let field = column + "-header";
				if (scoped[field]) {
					return h("span", scoped[field](params));
				} else return h("span", props.column.label);
			},
		},
		expandContent: {
			functional: true,
			name: "expand-content",
			inject: ["context"],
			render(h, ctx) {
				let column = ctx.parent.base.prop;
				// console.log(ctx);
				let scoped = ctx.injections.context.$scopedSlots;
				let props = ctx.props.scope;
				let params = {
					row: props.row,
					index: props.$index,
				};
				let field = column + "-content";
				return h("span", scoped[field](params));
			},
		},
		// expandScope: {
		// 	functional: true,
		// 	name: "expand-scope",
		// 	inject: ["context"],
		// 	render(h, ctx) {
		// 		const column = ctx.props.row.column.property;
		// 		if (column === "custom-header") {
		// 			console.log(ctx.injections.context.$scopedSlots["custom-header"]());
		// 			return h(
		// 				"span",
		// 				ctx.injections.context.$scopedSlots["custom-header"]()
		// 			);
		// 		}
		// 		const scoped = ctx.injections.context.$scopedSlots;
		// 		const row = ctx.props.row.row;
		// 		return h("span", scoped[column](row));
		// 	},
		// },
		// expandDom: {
		// 	functional: true,
		// 	name: "expand-dom",
		// 	inject: ["context"],
		// 	render(h, ctx) {
		// 		return h(
		// 			"div",
		// 			ctx.injections.context.$scopedSlots.expand(ctx.props.row.row)
		// 		);
		// 	},
		// },
		// multiTableHeader: {
		// 	functional: true,
		// 	name: "multi-table-header",
		// 	render(h, context) {
		// 		const columns = context.parent.columnOptions.columns;
		// 		console.log(context);
		// 		function generateElColumns(columns) {
		// 			return columns.map((column) => {
		// 				if (column.multi) {
		// 					return h(
		// 						"el-table-column",
		// 						{
		// 							attrs: {
		// 								...column.base,
		// 								// key: "column.base.label",
		// 							},
		// 						},
		// 						generateElColumns(column.children)
		// 					);
		// 				} else {
		// 					return h("el-table-column", {
		// 						attrs: {
		// 							...column.base,
		// 							// key: "column.base.label",
		// 						},
		// 					});
		// 				}
		// 			});
		// 		}
		// 		return h("div", generateElColumns(columns));
		// 	},
		// },
	},
	mounted() {
		// console.log(this.base);
	},
};
</script>

<style></style>
