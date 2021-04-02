<template>
	<div class="index">
		<custom-table :optionData="table_options">
			<template v-slot:date-content="scope">
				<i class="el-icon-time"></i>
				<span style="margin-left: 10px">{{ scope.row.date }}</span>
			</template>
			<template v-slot:city-content="scope">
				<i class="el-icon-time"></i>
				<span style="margin-left: 10px">{{ scope.row.city }}</span>
			</template>

			<!-- <template v-slot:setting>
				<el-button size="mini">编辑</el-button>
				<el-button size="mini" type="danger">删除</el-button>
			</template> -->

			<template v-slot:expand-content="scope">
				<el-form label-position="left" inline class="demo-table-expand">
					<el-form-item label="商品名称">
						<span>{{ scope.row.name }}</span>
					</el-form-item>
				</el-form>
			</template>
			<template v-slot:custom-header>
				<el-input size="mini" v-model="search" placeholder="输入关键字搜索" />
			</template>
			<template v-slot:custom-content>
				<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
					>Edit</el-button
				>
				<el-button
					size="mini"
					type="danger"
					@click="handleDelete(scope.$index, scope.row)"
					>Delete</el-button
				>
			</template>
		</custom-table>
	</div>
</template>

<script>
import CustomTable from "@/components/CustomTable";
export default {
	name: "index",
	data() {
		return {
			search: "",
			table_options: {
				tableOptions: {
					options: {
						"span-method": this.mergeStrategy,
						"summary-method": this.summary,
						"show-summary": true,
						"sum-text": "sum",
						lazy: true,
						load: this.loading,
						"row-key": "date",
						"tree-props": {
							children: "children",
							hasChildren: "hasChildren",
						},
						"default-sort": { prop: "date", order: "descending" },
						"highlight-current-row": true,
						// style: { width: "800px" },
						// height: 250,
						stripe: true,
						border: true,
						"row-class-name": this.rowClassName,
					},
					defaultData: [
						{
							date: "2016-05-02",
							name: "王小虎",
							province: "上海",
							city: "浦东区",
							address: "上海市普陀区金沙江路 1518 弄",
						},
						{
							date: "2016-05-03",
							name: "王小虎",
							province: "上海",
							city: "浦东区",
							address: "上海市普陀区金沙江路 1518 弄",
						},
						{
							date: "2016-05-04",
							name: "王小虎",
							province: "上海",
							city: "浦东区",
							address: "上海市普陀区金沙江路 1518 弄",
							hasChildren: true,
						},
					],
				},
				columnsOptions: {
					align: "center",
					columns: [
						{
							scope: true,
							base: {
								type: "expand",
								prop: "expand",
								width: "60",
							},
						},
						{
							base: {
								type: "index",
								index: this.indexMethod,
								// width: "55",
							},
						},
						{
							base: {
								type: "selection",
								// width: "55",
							},
						},
						{
							scope: true,
							base: {
								formatter: this.formatter,
								sortable: true,
								// fixed: "left",
								label: "日期",
								prop: "date",
								// width: "200px",
							},
						},
						{
							base: {
								label: "姓名",
								prop: "name",
								// width: "200px",
							},
						},
						{
							base: {
								label: "省",
								prop: "province",
								// width: "200px",
							},
						},
						{
							scope: true,
							base: {
								label: "市",
								prop: "city",
								// width: "200px",
							},
						},
						{
							base: {
								label: "地址",
								prop: "address",
								// width: "200px",
							},
						},
						{
							scope: true,
							base: {
								prop: "custom",
								// label: "操作",
								// width: "200px",
							},
						},
						// {
						// 	base: {
						// 		label: "配送信息",
						// 	},
						// 	multi: true,
						// 	children: [
						// 		{
						// 			base: {
						// 				label: "姓名",
						// 				prop: "name",
						// 				// width: "200px",
						// 			},
						// 		},
						// 		{
						// 			base: {
						// 				label: "地址",
						// 			},
						// 			multi: true,
						// 			children: [
						// 				{
						// 					base: {
						// 						label: "省份",
						// 						prop: "province",
						// 						// width: "200px",
						// 					},
						// 				},
						// 				{
						// 					base: {
						// 						label: "市区",
						// 						prop: "city",
						// 						// width: "200px",
						// 					},
						// 				},
						// 				{
						// 					base: {
						// 						label: "地址",
						// 						prop: "address",
						// 						// width: "200px",
						// 					},
						// 				},
						// 			],
						// 		},
						// 	],
						// },
					],
				},
			},
		};
	},
	components: {
		CustomTable,
	},
	methods: {
		indexMethod(index) {
			return index * 2;
		},
		mergeStrategy({ rowIndex, columnIndex }) {
			console.log(rowIndex);
			console.log(columnIndex);
			console.log(columnIndex);
			console.log(columnIndex);
			if (rowIndex === 1) {
				if (columnIndex === 3) {
					return [1, 2];
				}
			}
			// if (rowIndex == 0) {
			// 	if (columnIndex === 5) {
			// 		return {
			// 			rowspan: 2,
			// 			colspan: 1,
			// 		};
			// 	}
			// }
		},
		summary() {
			return ["合计", 2, 3, 4, 5, 6, 7, 8, 9];
		},
		rowClassName(row, rowIndex) {
			if (rowIndex != 1) {
				return "warning-row";
			}
			return "";
		},
		formatter(row) {
			return row.date;
		},
		loading(tree, treeNode, resolve) {
			setTimeout(() => {
				resolve([
					{
						date: "2016-05-05",
						name: "王小虎",
						province: "上海",
						city: "浦东区",
						address: "上海市普陀区金沙江路 1518 弄",
					},
					{
						date: "2016-05-06",
						name: "王小虎",
						province: "上海",
						city: "浦东区",
						address: "上海市普陀区金沙江路 1518 弄",
					},
				]);
			}, 1000);
		},
	},
};
</script>

<style>
/* .el-table__row {
	background: #333 !important;
} */
/* .warning-row {
	background: orange !important;
} */
</style>
