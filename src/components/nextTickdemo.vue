<template>
    <div>
        <button ref="btn" @click="testClick()">{{msg}}</button>
    </div>
</template>

<script>
export default {
    name: 'demo',
    data(){
        return {
            msg: 'hello'
        }
    },
    methods: {
        testClick(){
            this.msg="click"
            this.$nextTick(() => {
                console.log(1)
                console.log(this.$refs.btn.innerHTML)
            })
            console.log(this.$refs.btn.innerHTML)
        }
    }
}
</script>

<style>

</style>
