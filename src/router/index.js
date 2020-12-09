import Vue from 'vue'
import Router from 'vue-router'
import MSite from "../pages/msite/MSite";
import Profile from "../pages/profile/Profile";
import Order from "../pages/order/Order";
import Search from "../pages/search/Search";
import Login from "../pages/login/Login";
import Shop from "../pages/shop/Shop";
import DianCan from "../pages/shop/diancan/DianCan";
import Detail from "../pages/shop/detail/Detail";
import ShangJia from "../pages/shop/shangjia/ShangJia";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{
        FooterShow: true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta:{
        FooterShow: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        FooterShow: true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        FooterShow: true
      }
    },
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/shop',
      component: Shop,
      children:[
        {
          path: '/shop/diancan',
          component: DianCan
        },
        {
          path: '/shop/detail',
          component: Detail
        },
        {
          path: '/shop/shangjia',
          component: ShangJia
        },
        {
          path: '',
          redirect: '/shop/diancan',
        },
      ]
    },

  ]
})
