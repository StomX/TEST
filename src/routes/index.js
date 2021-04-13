import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import ItemView from '../views/ItemView';
import UserView from '../views/UserView';

Vue.use(VueRouter);

export const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            path: '/ask',
            name: 'ask',
            component: AskView,
        },
        {
            path: '/news',
            name: 'news',
            component: NewsView,
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user/:id',
            component: UserView,
        },
    ],
    mode: 'history'
});