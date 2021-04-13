import Vue from 'vue';
import Vuex from 'vuex'
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
});