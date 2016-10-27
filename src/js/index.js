import Vue from 'vue';
import VueRouter from 'vue-router';

import MainView from '../pageview/main.vue';
import HomeView from '../pageview/home.vue';
import BlogView from '../pageview/blog.vue';
import AddView from '../pageview/add.vue';
import AboutView from '../pageview/about.vue';
/*
const HomeView = { template: '<h1>111</h1>'}
const BlogView = { template: '<h1>222</h1>'}
const AddView = { template: '<h1>333</h1>'}
const AboutView = { template: '<h1>444</h1>'}
*/
Vue.use(VueRouter);

const routes = [
        {
            path: '/',
            component: MainView,
            redirect: '/home',
            children: [{
                path: '/home',
                component: HomeView
            },
            {
                path: '/blog',
                component: BlogView
            },
            {
                path: '/blog/add',
                component: AddView
            },
            {
                path: '/about',
                component: AboutView
            }]
        }
    ]

const router = new VueRouter({
    routes: routes,
    mode: 'history',
    linkActiveClass: 'active'
});

const app = new Vue({
    router
}).$mount('#wrapper');

