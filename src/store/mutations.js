const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  }
};

export default mutations;
