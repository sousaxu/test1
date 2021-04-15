<template>
	<div class="custom-table">
		<el-table :data="tableOptions.defaultData" v-bind="tableOptions.options">
			<template v-for="(item, index) in columnsOptions.columns">
				<!-- 使用作用域插槽的列 -->
				<table-column
					:align="columnsOptions.align"
					v-if="item.scope"
					:key="index"
					:base="item.base"
				></table-column>
				<!-- 普通列 -->
				<el-table-column
					:key="index"
					v-bind="item.base"
					v-else
					:align="columnsOptions.align"
				>
				</el-table-column>
			</template>
		</el-table>
	</div>
</template>

<script>
import TableColumn from "@/components/TableColumn";
export default {
	data() {
		return {
			tableOptions: {},
			columnsOptions: this.optionData.columnsOptions,
		};
	},
	provide() {
		return {
			//注入到插槽列中操作
			context: this,
		};
	},
	props: {
		optionData: {
			type: Object,
			required: true,
			default() {
				return {};
			},
		},
	},
	name: "custom-table",
	components: {
		TableColumn,
	},
	created() {
		//table选项
		this.tableOptions = this.optionData.tableOptions;
	},
	mounted() {},
};
</script>

<style></style>
