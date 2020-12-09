/*
  包含多个直接更新state的对象
 */

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORY,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  LOGOUT,
  RECEIVE_GOODS,
  RECEIVE_INFO,
  RECEIVE_RATINGS
} from './mutation_types'

export default {
  [RECEIVE_ADDRESS](state, {address}){
    state.address = address
  },
  [RECEIVE_CATEGORY](state, {categorys}){
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state, {userInfo}){
    state.userInfo = userInfo
  },
  [LOGOUT](state){
    state.userInfo = {}
  },

  [RECEIVE_INFO](state, {info}){
    state.info = info
  },
  [RECEIVE_GOODS](state, {goods}){
    state.goods = goods
  },
  [RECEIVE_RATINGS](state, {ratings}){
    state.ratings = ratings
  },
}
