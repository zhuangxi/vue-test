<template>
  <div class="wrap">
    <div class="btn-wrap">
      <div class='btn'>
        <p>red</p>
        <button @click="random33">start</button>
        <p>{{curRedBall}}</p>
      </div>
      <div class='btn'>
        <p>blue</p>
        <button @click="random16">start</button>
        <p>{{curBlueBall}}</p>
      </div>
    </div>
    <div>
      <span v-for="(item, index) in redRondom" :key="index + 'red'" class="red-ball">{{item}}</span>
      <span v-for="(item, index) in blueRondom" :key="index + 'blue'" class="blue-ball">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      redBall: [],
      blueBall: [],
      redRondom: [],
      blueRondom: [],
      curRedBall: 0,
      curBlueBall: 0,
      curRedIdx: 0,
      curBlueIdx: 0,
      redtimer: null,
      bluetimer: null
    };
  },
  created() {
    this.all33(this.redBall)
    this.all16(this.blueBall)
    this.shuffle([1])
  },
  methods: {
    all33(arr) {
      for (let i = 1; i <= 33; i++) {
        arr.push(i)
      }
      this.shuffle(arr)
    },

    all16(arr) {
      for (let i = 1; i <= 16; i++) {
        arr.push(i)
      }
      this.shuffle(arr)
    },
    random33() {
      if(this.redRondom.length < 6 ){
        this.redtimer = setInterval(() => {
          this.curRedIdx = Math.floor(Math.random() * this.redBall.length)
          this.curRedBall = this.redBall[this.curRedIdx]
        }, 50)
        setTimeout(() => {
          this.stopRandom33(this.redtimer)
        }, 2000)
      }
    },
    stopRandom33() {
      clearInterval(this.redtimer)
      this.redRondom.push(this.curRedBall)
      this.redBall.splice(this.curRedIdx, 1)
    },
    random16() {
      if(this.blueRondom.length < 1 ){
        this.bluetimer = setInterval(() => {
          this.curBlueIdx = Math.floor(Math.random() * this.blueBall.length)
          this.curBlueBall = this.blueBall[this.curBlueIdx]
        }, 50)
        setTimeout(() => {
          this.stopRandom16()
        }, 2000)
      }
    },
    stopRandom16() {
      clearInterval(this.bluetimer)
      this.blueRondom.push(this.curBlueBall)
      this.blueBall.splice(this.curBlueIdx, 1)
    },
    shuffle(arr){
      let length = arr.length,
      randomIndex,
      temp
      while(length){
        randomIndex = Math.floor(Math.random() * (length--))
        temp = arr[randomIndex]
        arr[randomIndex] = arr[length]
        arr[length] = temp
      }
    }
  }
};
</script>

<style>
.wrap {
  text-align: left;
}
.btn-wrap{
  display: flex;
  align-items: flex-start;
}
.btn{
  width: 100px;
  height: 150px;
}
.red-ball, .blue-ball {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 50%;
  margin-right: 10px;
  font-size: 20px;
}
</style>
