<template>
    <div class="main" ref="myChart"></div>
</template>

<script>
export default {
    name: 'demo04',
    mounted() {
        this.chartInit()
    },
    methods: {
        chartInit(){
            var myChart = this.$echarts.init(tis.$refs.myChart)
        }
    }
}
</script>

<style>

</style>
