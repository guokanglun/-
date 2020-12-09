/*
  包含多个间接更新state的方法
 */

import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUserInfo,
  reqLogout,
  reqShopGoods,
  reqShopInfo,
  reqShopRatings
} from '../api/index'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  LOGOUT,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS
} from './mutation_types'


export default {
  // 异步获取地址
  async getAddress({commit, state}) {
    const geohash = state.latitude + ',' + state.longitude;
    const result = await reqAddress(geohash);
    commit(RECEIVE_ADDRESS, {address: result.data})
  },
  // 异步获取分类列表
  async getCategory({commit}){
    const result = await reqFoodCategorys();
    commit(RECEIVE_CATEGORY, {categorys: result.data})
  },

  // 异步获取商家列表
  async getShopList({commit, state}){
    const {longitude, latitude} = state;
    const result = await reqShops(longitude, latitude);
    commit(RECEIVE_SHOPS, {shops: result.data})
  },

  // 同步获取用户信息
  receiveUser({commit}, userInfo){
    // debugger
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 获取用户信息
  async getUserInfo({commit}){
    const result = await reqUserInfo();
    // debugger
    if(result.code === 0){
      const userInfo = result.data;
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  // 异步登出
  async logout({commit}){
    const result = await reqLogout();
    if(result.code === 0){
      commit(LOGOUT)
    }
  },

  async getShopInfo({commit}){
    const result = await reqShopInfo();
    if(result.code===0){
      const info = result.data;
      commit(RECEIVE_INFO, {info})
    }
  },
  async getShopRatings({commit}){
    const result = await reqShopRatings();
    if(result.code===0){
      const ratings = result.data;
      commit(RECEIVE_RATINGS, {ratings})
    }
  },
  async getShopGoods({commit}){
    const result = await reqShopGoods();
    if(result.code===0){
      const goods = result.data;
      commit(RECEIVE_GOODS, {goods})
    }
  },
}
