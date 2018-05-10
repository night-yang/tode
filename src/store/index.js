import Vue from 'vue'
import Vuex from 'vuex'
import work from './modules/work'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    work
  }
})