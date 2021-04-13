import { fetchAskList } from '../api/ask';
import { fetchJobsList } from '../api/jobs';
import { fetchNewsList } from '../api/news';

export default {
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