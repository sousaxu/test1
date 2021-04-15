<template>
	<div style="width: 100%; height: 100%; position: relative">
		<div
			style="
				position: absolute;
				height: 100%;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			"
			v-if="
				!option || (option && !option.series) || (option && !option.series.length)
			"
		>
			<p><i class="el-icon-loading"></i></p>
			<p>数据加载中...</p>
		</div>
		<div ref="chartsDom" class="v-charts"></div>
	</div>
</template>

<script>
export default {
	name: "VCharts",
	props: ["option"],
	data() {
		return {
			echartsObj: "",
		};
	},

	methods: {
		init() {
			// this.option = null;
			// console.log(this.option);
			this.echartsObj = this.$echarts.init(this.$refs.chartsDom, {
				height: "300px",
			});
			this.drawCharts(this.option);
			window.addEventListener("resize", this.resizeCharts);
		},
		drawCharts(option) {
			this.echartsObj.clear();
			this.$nextTick(() => {
				this.echartsObj.setOption(option);
			});
		},
		resizeCharts() {
			this.echartsObj.resize();
		},
	},
	mounted() {
		this.init();
	},
	beforeDestroy() {
		window.removeEventListener("resize", this.resizeCharts);
		this.echartsObj.dispose();
	},
	watch: {
		option: {
			handler(newVal, oldVal) {
				console.log(oldVal);
				this.drawCharts(newVal);
			},
			deep: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.v-charts {
	width: 100%;
	height: 100%;
}
</style>
