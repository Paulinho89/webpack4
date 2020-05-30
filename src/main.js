import '@babel/polyfill';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';
import './styles/normalize.css';
import './styles/common.less';

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.use(VueRouter);

new Vue({
    router
}).$mount('#app');