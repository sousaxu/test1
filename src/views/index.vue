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

			<!-- 
				<template v-slot:setting>
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
			<!-- @click="handleEdit(scope.$index, scope.row)"
				@click="handleDelete(scope.$index, scope.row)" -->
			<template v-slot:custom-content>
				<el-button size="mini">Edit</el-button>
				<el-button size="mini" type="danger">{{ getFoo }}</el-button>
			</template>
		</custom-table>
		<div class="vcharts-container" style="width:100%;height:300px">
			<v-charts :option="echarts_option"></v-charts>
		</div>
	</div>
</template>

<script>
import VCharts from "@/components/VCharts";
import CustomTable from "@/components/CustomTable";
import { mapGetters, mapState } from "vuex";
export default {
	watch: {
		search(newValue) {
			console.log(newValue);
		},
	},
	name: "index",
	data() {
		return {
			search: "222",
			echarts_option: {
				legend: {},
				tooltip: {},
				dataset: {
					// 提供一份数据。
					source: [
						["product", "2015", "2016", "2017"],
						["Matcha Latte", 43.3, 85.8, 93.9],
						["Milk Tea", 83.1, 73.4, 55.1],
						["Cheese Cocoa", 86.4, 65.2, 82.5],
						["Walnut Brownie", 72.4, 53.9, 39.1],
					],
				},
				// 声明一个 X 轴，类目轴（category）。默认情况下，类目轴对应到 dataset 第一列。
				xAxis: { type: "category" },
				// 声明一个 Y 轴，数值轴。
				yAxis: {},
				// 声明多个 bar 系列，默认情况下，每个系列会自动对应到 dataset 的每一列。
				series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }],
			},
			table_options: {
				tableOptions: {
					//table的配置选项
					options: {
						//行列合并策略
						"span-method": this.mergeStrategy,
						//表尾合计行
						"summary-method": this.summary,
						"show-summary": true,
						"sum-text": "sum",
						//树型数据懒加载
						lazy: true,
						load: this.loading,
						"row-key": "date",
						"tree-props": {
							children: "children",
							hasChildren: "hasChildren",
						},
						//默认排序策略
						"default-sort": { prop: "date", order: "descending" },
						//打开选中行高亮
						"highlight-current-row": true,
						// style: { width: "800px" },
						// height: 250,
						//斑马纹
						stripe: true,
						//边框
						border: true,
						//给行添加class
						"row-class-name": this.rowClassName,
					},
					//默认数据
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
				//列选项
				columnsOptions: {
					//内容水平排列方向
					align: "center",
					columns: [
						{
							//启用作用域插槽
							scope: true,
							//基础选项
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
								//格式化数据
								formatter: this.formatter,
								//可排序
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
		VCharts,
	},
	computed: {
		...mapGetters("a", ["getFoo"]),
		...mapState({ foo: (state) => state.a.foo }),
	},
	methods: {
		print(event) {
			this.search = event;
			console.log(this.search);
		},
		indexMethod(index) {
			return index * 2;
		},
		mergeStrategy({ rowIndex, columnIndex }) {
			// console.log(rowIndex);
			// console.log(columnIndex);
			// console.log(columnIndex);
			// console.log(columnIndex);
			if (rowIndex === 1) {
				if (columnIndex === 3) {
					return [1, 2];
				} else if (columnIndex === 4) {
					return [0, 0];
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
