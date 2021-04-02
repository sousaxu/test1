<template>
	<div class="custom-table">
		<el-table :data="tableOptions.defaultData" v-bind="tableOptions.options">
			<template v-for="(item, index) in columnsOptions.columns">
				<table-column
					:align="columnsOptions.align"
					v-if="item.scope"
					:key="index"
					:base="item.base"
				></table-column>
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
		this.tableOptions = this.optionData.tableOptions;
	},
	mounted() {},
};
</script>

<style></style>
