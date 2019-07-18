<template>
    <div ref="myChart" class="main">

    </div>
</template>

<script>
export default {
    name: 'demo02',
    data(){
        return {

        }
    },
    mounted(){
        this.chartInit()
    },
    methods: {
        chartInit(){
            var myChart = this.$echarts.init(this.$refs.myChart)
            myChart.setOption({
                series: [{
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        {value: 47, name: '直接访问', itemStyle: {color: '#12aa12'}},
                        {value: 10, name: '视频广告'},
                        {value: 15, name: '联盟广告'},
                        {value: 8, name: '邮件营销'},
                        {value: 20, name: '搜索引擎'},
                    ],
                    // roseType: 'angle',   // 南丁格尔图
                    itemStyle: {
                        // 阴影的大小
                        shadowBlur: 200,
                        // 阴影水平方向的偏移
                        // shadowOffsetX: 0,
                        // 阴影垂直方向的偏移
                        // shadowOffsetY: 0,
                        // 阴影的颜色
                        shadowColor: 'rgba(255, 255, 255, .5)'
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.8)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },

                }],
                backgroundColor: '#2c343c',
                // visualMap: {
                //     show: false,
                //     min: 80,
                //     max: 600,
                //     inRange: {
                //         colorLightness: [0, 1]
                //     }
                // },
            })
        }
    }
}
</script>

<style>
.main{
    width: 500px;
    height: 500px;
}
</style>
