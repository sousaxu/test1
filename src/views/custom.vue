<template>
	<div class="custom">
		<!-- <data-table-list
			v-loading="vLoading"
			:table-data="tableDataConfig"
			:mainKey="mainKey"
		></data-table-list> -->
	</div>
</template>

<script>
// import DataTableList from "@/views/components/DataTableList";
export default {
	name: "custom",
	data() {
		return {
			vLoading: true,
			tableDataConfig: {
				tHead: [
					{
						key: true,
						title: "姓名",
						prop: "name",
						sortable: true,
						show: true,
						width: "",
						minWidth: "",
						showOverFlowTooltip: "",
						rendCol: () => "",
						rendClick: () => "",
						linkTo: () => "",
					},
					{
						key: false,
						title: "年龄",
						prop: "age",
						sortable: true,
						show: true,
						width: "",
						minWidth: "",
						showOverFlowTooltip: "",
						rendCol: () => "",
						rendClick: () => "",
						linkTo: () => "",
					},
					{
						key: false,
						title: "住址",
						prop: "address",
						sortable: true,
						show: true,
						width: "",
						minWidth: "",
						showOverFlowTooltip: "",
						rendCol: () => "",
						rendClick: () => "",
						linkTo: () => "",
					},
				],
				dataArr: [
					{
						name: "sousa",
						age: 18,
						address: "宝安",
					},
					{
						name: "zhenhe",
						age: 18,
						address: "南山",
					},
				],
				showBorder: true,
				showCheckbox: true,
				showSquenceColumn: true,
			},
		};
	},
	components: {
		// DataTableList,
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
