import Vue from 'vue';
import VueRouter from 'vue-router';
import NewsView from '../views/NewsView';
import AskView from '../views/AskView';
import JobsView from '../views/JobsView';
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
            component: AskView,
        },
        {
            path: '/news',
            component: NewsView,
        },
        {
            path: '/jobs',
            component: JobsView,
        },
        {
            path: '/item',
            component: ItemView,
        },
        {
            path: '/user',
            component: UserView,
        },
    ],
    mode: 'history'
});