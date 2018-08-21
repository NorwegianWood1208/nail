import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lists:[],
    bili1:50,
    nili2:50,
    token:'6570ee43d601c614066b2c9d99e39e47'
  },
  mutations: {
    getlist(state,payload){
      state.lists = payload;
    },
    gettoken(state,payload){
      state.token = payload
    },
    changebili1(state,payload){
      state.bili1 = payload;
    },
    changebili2(state,payload){
      state.bili2 = payload;
    }
  },
  actions: {

  },
});
