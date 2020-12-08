/*
  vuex最核心的管理状态对象
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import state from './state'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})
