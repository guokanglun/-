<template>
    <div>
      <ShopHeader></ShopHeader>
      <ul class="shop">
        <li>
          <router-link to="/shop/diancan">点餐</router-link>
        </li>
        <li>
          <router-link to="/shop/detail">评价</router-link>
        </li>
        <li>
          <router-link to="/shop/shangjia">商家</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
</template>

<script>
    import ShopHeader from "./shop_header/ShopHeader";
    import {mapState} from 'vuex'

    export default {
        computed:{
          ...mapState(['info'])
        },
        name: "Shop",
        mounted(){
          this.$store.dispatch('getShopInfo');
        },
        components:{
            ShopHeader
        }
    }
</script>

<style scoped>
.shop{
  width: 100%;
}
  .shop li{
    display: inline-block;
    width: 30%;
    text-align: center;
    margin: 10px 0;
  }
  .router-link-active{
    color:darkred;
    border-bottom: 1px solid darkred;
  }
</style>
