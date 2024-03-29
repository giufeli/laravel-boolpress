require('./common');

import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import PageHome from './pages/PageHome';
import PageAbout from './pages/PageAbout';
import PagePosts from './pages/PagePosts';
import PagePost from './pages/PagePost';

Vue.use(VueRouter);


const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: PageHome,
        },
        {
            path: '/about',
            name: 'about',
            component: PageAbout,
        },
        {
            path: '/posts',
            name: 'postsIndex',
            component: PagePosts,
        },
        {
            path: '/posts/:id',
            name: 'postsShow',
            component: PagePost,
            props: true,
        },
    ]
});

new Vue({
    el: '#root',
    render: h => h(App),

    router
})
