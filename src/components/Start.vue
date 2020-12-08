<template>
  <div class="star star-24">
    <span class="star-item" v-for="(sc, index) in scoreArr" :key="index" :class="sc"></span>
  </div>
</template>

<script>
    export default {
        name: "Start",
        props:{
            score: Number
        },
        computed:{
            scoreArr(){
                let arr = [];
                const {score} = this;
                const on = Math.floor(score);
                for(let i = 0; i< on; i++){
                    arr.push('on')
                }
                if(score*10 - on*10 > 5){
                    arr.push('half')
                }
                while(arr.length <5){
                    arr.push('off')
                }
                return arr;
            }
        }
    }
</script>

<style scoped>

</style>
