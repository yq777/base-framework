import Vue from 'vue';
import Vuex from 'vuex';
import root from './root';
import createPersistedState from 'vuex-persistedstate';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

const plugins = [createPersistedState({storage: window.sessionStorage, key: '__RC_C_BACKEND_STORE__'})];

const debug = process.env.NODE_ENV !== 'production' ? plugins.push(createLogger()) : null;

export default new Vuex.Store({
  ...root,
  plugins,
  strict: debug
});
