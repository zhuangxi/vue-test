<template>
  <div >
    <el-select v-model="value" filterable placeholder="请选择" >
      <el-option v-for="item in count" :key="item" :label="item" :value="item" infinite-scroll-distance="10" v-infinite-scroll="load" infinite-scroll-immediate></el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      count: [0,1,2,3,4,5,6,7,8,9,10,11,12],
      num: 12
    }
  },
    methods: {
        load() {
            if(this.num<120){
                this.num++
                this.count.push(this.num)
            }
        }
    }
};
</script>

<style lang='scss'>
.scoll {
  ul {
    width: 180px;
    height: 200px;
  }
}
</style>
