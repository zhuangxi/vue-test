<template>
    <div>
        {{ msg }}
    </div>
</template>

<script>
export default {
    name: 'server',
    data(){
        return {
            msg: '1'
        }
    },
    created(){
        let vm = this
        if(window.WebSocket){
            console.log("支持")
        }else{
            console.log("不支持")
        }
        var ws = new WebSocket('ws://localhost:9000')
        ws.onopen = function() {
            console.log("open")
            ws.send('from web')
        }
        ws.onmessage = function(event){
            // console.log(event)
            console.log(event.data)
            vm.msg = event.data
        }
        ws.onclose = function(){
            console.log("closed")
        }
        ws.onerror = function(evt){
            console.log(evt)
            console.log('error')
            
        }
    }
}
</script>

<style>

</style>
