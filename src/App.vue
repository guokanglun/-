<template>
  <div id="app">
      <router-view></router-view>
      <FooterGuide v-show="$route.meta.FooterShow"></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from "./components/FooterGuide";

  export default {
      name: 'App',
      components:{
          FooterGuide
      },
      mounted() {
          this.$store.dispatch('getAddress');
          this.$store.dispatch('getCategory');
          this.$store.dispatch('getUserInfo')
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    width: 100%
    height: 100%
    background #f5f5f5
</style>
