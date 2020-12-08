/*
  包含多个间接更新state的方法
 */

import {
  reqAddress,
  reqFoodCategorys,
  reqShops
} from '../api/index'
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS
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
  }
}
