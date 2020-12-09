<template>
  <!--首页附近商家-->
  <div class="msite_shop_list">
    <div class="shop_header">
      <i class="iconfont icon-xuanxiang"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <div class="shop_container">
      <ul class="shop_list" v-if="shops.length>0">
        <li class="shop_li border-1px" v-for="(shop, index) in shops" :key="index" @click="$router.push('/shop')">
          <a>
            <div class="shop_left">
              <img class="shop_img" src="./images/shop/1.jpg">
            </div>
            <div class="shop_right">
              <section class="shop_detail_header">
                <h4 class="shop_title ellipsis">{{ shop.name }}</h4>
                <ul class="shop_detail_ul">
                  <li class="supports">保</li>
                  <li class="supports">准</li>
                  <li class="supports">票</li>
                </ul>
              </section>
              <section class="shop_rating_order">
                <section class="shop_rating_order_left">
                  <Start :score="shop.rating"></Start>
                  <div class="rating_section">
                   {{ shop.rating }}
                  </div>
                  <div class="order_section">
                    月售106单
                  </div>
                </section>
                <section class="shop_rating_order_right">
                  <span class="delivery_style delivery_right">硅谷专送</span>
                </section>
              </section>
              <section class="shop_distance">
                <p class="shop_delivery_msg">
                  <span>¥20起送</span>
                  <span class="segmentation">/</span>
                  <span>配送费约¥5</span>
                </p>
              </section>
            </div>
          </a>
        </li>
      </ul>
      <ul v-else>
        <li v-for="_ in 7">
          <img src="./images/shop_back.svg" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    import Start from "./Start";
    import {mapState} from 'vuex'
    export default {
        name: "ShopList",
        mounted() {
            this.$store.dispatch('getShopList')
        },
        computed: {
            ...mapState(['shops'])
        },
        components:{
            Start
        }
    }
</script>

<style scoped>

</style>
