<template>
    <div id="main" ref="myEcharts">

    </div>
</template>

<script>
// 按需引用
let echarts = require('echarts/lib/echarts')
// require('echarts/lib/chart/bar')
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
export default {
    name: 'demo01',
    mounted(){
        this.fruitChart()
    },    
    methods: {
        fruitChart(){
            var myChart = echarts.init(document.querySelector("#main"))
            myChart.setOption({
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
                    data: [5, 12, 6, 11, 31, 8]
                }],
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'red' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'blue' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            })
        }
    }
}
</script>

<style>
#main{
    width: 500px;
    height: 500px;
}
</style>
