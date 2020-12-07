<template>
    <div>
      <footer class="footer_guide border-1px">
        <a href="javascript:;" class="guide_item" @click="goto('/msite')" :class="{on: isCurrent('/msite')}">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
          <span>外卖</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto('/search')" :class="{on: isCurrent('/search')}">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
          <span>搜索</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto('/order')" :class="{on: isCurrent('/images')}">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
          <span>订单</span>
        </a>
        <a href="javascript:;" class="guide_item" @click="goto('/profile')" :class="{on: isCurrent('/profile')}">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
          <span>我的</span>
        </a>
      </footer>
    </div>
</template>

<script>
    export default {
        name: "FooterGuide",
        methods:{
            goto(path){
                // 点击跳转路由
                this.$router.replace(path)
            },
            isCurrent(path){
                // 判断当前路由是否和指定路由一致，如果一致就高亮显示
                return this.$route.path === path;
            }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app .footer_guide {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
  }
  #app .footer_guide::before {
    content: '';
    position: absolute;
    z-index: 200;
    left: 0;
    top: 0;
    width: 100%;
    height: 1px;
    background-color: #e4e4e4;
  }
  #app .footer_guide .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999;
  }
  #app .footer_guide .guide_item.on {
    color: #02a774;
  }
  #app .footer_guide .guide_item span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  #app .footer_guide .guide_item span .iconfont {
    font-size: 22px;
  }
</style>
