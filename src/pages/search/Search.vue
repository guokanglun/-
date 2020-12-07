<template>

      <div class="msite">
        <section class="search">
<!--          <header class="header">-->
<!--            <a class="header_title">-->
<!--              <span class="header_title_text">搜索</span>-->
<!--            </a>-->
<!--          </header>-->
          <HeadTop title="搜索"></HeadTop>
          <form class="search_form" action="#">
            <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
            <input type="submit" name="submit" class="search_submit">
          </form>
        </section>
      </div>

</template>

<script>
  import HeadTop from "../../components/HeadTop";
    export default {
        name: "Search",
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
  .search {
    width: 100%;
  }
  .search .search_form {
  zoom: 1;
  margin-top: 45px;
  background-color: #fff;
  padding: 12px 8px;
  }
  .search .search_form::after {
    content: '';
    display: block;
    clear: both;
  }
  .search .search_form input {
    height: 35px;
    padding: 0 4px;
    border-radius: 2px;
    font-weight: bold;
    outline: none;
  }
  .search .search_form input.search_input {
    float: left;
    width: 79%;
    border: 4px solid #f2f2f2;
    font-size: 14px;
    color: #333;
    background-color: #f2f2f2;
  }
  .search .search_form input.search_submit {
    float: right;
    width: 18%;
    border: 4px solid #02a774;
    font-size: 16px;
    color: #fff;
    background-color: #02a774;
  }
</style>
