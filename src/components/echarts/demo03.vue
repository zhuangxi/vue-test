<template>
    <div class="main" ref="myChart"></div>
</template>

<script>
export default {
    name: 'demo03',
    mounted() {
        this.chartInit()
    },
    methods: {
        chartInit(){
            var myChart = this.$echarts.init(this.$refs.myChart, 'dark')
            myChart.setOption({
                // 全局调色盘
                color: ['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3'],
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['苹果','草莓','橘子','香蕉','香梨','葡萄']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 12, 6, 11, 31, 8],
                    // 高亮
                    emphasis: {
                        itemStyle: {
                            color: 'blue'
                        },
                        label: {
                            show: true,
                            formatter: 'this is a emphasis label'
                        }
                    }
                }],

            })
        }
    }

}
</script>

<style>

</style>
