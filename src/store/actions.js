import { fetchAskItem, fetchAskList } from '../api/ask';
import { fetchNewsList } from '../api/news';
import { fetchUserData } from '../api/user';

export default {
    FETCH_NEWS: (context) => fetchNewsList()
        .then(response => context.commit('SET_NEWS', response.data))
        .catch(error => console.log(error)),
    FETCH_ASK: (context) => fetchAskList()
        .then(response => context.commit('SET_ASKS', response.data))
        .catch(error => console.error(error)),
    FETCH_USERDATA: (context, userId) => fetchUserData(userId)
        .then(response => context.commit('SET_USERDATA', response.data))
        .catch(error => console.error(error)),
    FETCH_ASKITEM: (context, askId) => fetchAskItem(askId)
        .then(response => context.commit('SET_ASKITEM', response.data))
        .catch(error => console.error(error))
}