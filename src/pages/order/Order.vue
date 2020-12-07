<template>
    <div class="msite">
      <div>
        <section class="order">

          <HeadTop title="订单列表" ></HeadTop>

          <section class="order_no_login">
            <img src="./images/person.png">
            <h3>登录后查看外卖订单</h3>
            <button>立即登陆</button>
          </section>
        </section>
      </div>
    </div>
</template>

<script>
    import HeadTop from "../../components/HeadTop";
    export default {
        name: "Order",
        components:{
            HeadTop
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .msite {
    position: relative;
    margin-top: 45px;
    height: 100%;
    background: #fff;
  }
.order {
    width: 100%;
  }
.order .order_no_login {
    padding-top: 140px;
    width: 60%;
    margin: 0 auto;
    text-align: center;
  }
.order .order_no_login >img {
    display: block;
    width: 100%;
    height: 30%;
  }
.order .order_no_login >h3 {
    padding: 10px 0;
    font-size: 17px;
    color: #6a6a6a;
  }
.order .order_no_login >button {
    display: inline-block;
    background: #02a774;
    font-size: 14px;
    color: #fff;
    border: 0;
    outline: none;
    border-radius: 5px;
    padding: 10px 20px;
  }
</style>
