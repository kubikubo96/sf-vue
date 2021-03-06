import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 1,
  },
  mutations: {
    increment(state, n = 2) {
      state.count += n
    },
  },
})

export default store
