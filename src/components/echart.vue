<template>
    <div>
        <router-link to="/echart/demo01">柱状图</router-link>
        <router-link to="/echart/demo02">饼状图</router-link>
        <router-link to="/echart/demo03">light主题</router-link>
        <router-link to="/echart/demo04">折线图</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'echarts'
}
</script>

<style>

</style>
