import {SET_USERINFO} from "../../mutation-types";

const state = {
  userInfo: {}
};
const getters = {};
const actions = {};
const mutations = {
  [SET_USERINFO](state, userInfo) {
    state.userInfo = userInfo;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
