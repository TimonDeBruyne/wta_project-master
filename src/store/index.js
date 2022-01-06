import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
  },
  getters: {
    currentUser(state) {
      return state.user;
    },
    currentUserLoggedIn(state) {
      return !!state.user?.uid;
    },
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
  },
  actions: {
    setUser({ commit }, user) {
      commit('SET_USER', user);
    },
  },
  modules: {
  }
})
