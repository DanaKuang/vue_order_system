import Vue from 'vue'
import Router from 'vue-router'

import login from '@/views/login.vue'

Vue.use(Router)

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        redirect: '/login',
    },  
    {
        path: '/login',
        component: login,
        name: 'login'
    }
]

export default new Router({
	routes
})
