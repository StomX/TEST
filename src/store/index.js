import Vue from 'vue';
import Vuex from 'vuex'
import { fetchAskList } from '../api/ask';
import { fetchJobsList } from '../api/jobs';
import { fetchNewsList } from '../api/news';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        asks: []
    },
    mutations: {
        SET_NEWS: (state, news) => state.news = news,
        SET_ASKS: (state, asks) => state.asks = asks,
        SET_JOBS: (state, jobs) => state.jobs = jobs,
    },
    actions: {
        FETCH_NEWS: (context) => fetchNewsList()
                .then(response => context.commit('SET_NEWS', response.data))
                .catch(error => console.log(error)),
        FETCH_ASKS: (context) => fetchAskList()
            .then(response => context.commit('SET_ASKS', response.data))
            .catch(error => console.error(error)),
        FETCH_JOBS: (context) => fetchJobsList()
            .then(response => context.commit('SET_JOBS', response.data))
            .catch(error => console.error(error))
    }
});

export {
    store
}