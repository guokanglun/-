import Vue from 'vue'
import Router from 'vue-router'
import MSite from "../pages/msite/MSite";
import Profile from "../pages/profile/Profile";
import Order from "../pages/order/Order";
import Search from "../pages/search/Search";
import Login from "../pages/login/Login";

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

  ]
})
