<template>
    <div>
        <div id="dplayer"></div>
    </div>
</template>

<script>
import 'dplayer/dist/DPlayer.min.css';
import DPlayer from 'dplayer';
export default {
    name: 'player',
    data(){
        return {
            dp: null
        }
    },
    mounted(){
        this.showVideo()
        this.dp.on('pause', () => {
				this.$emit('pause')
			})
			this.dp.on('play', () => {
                this.$emit('play')
			})
    },
    methods: {
        showVideo(){
            this.dp = new DPlayer({
                container: document.querySelector('#dplayer'),
                video: {
                    url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
                }
            })
        }
    }
}
</script>

<style>

</style>
