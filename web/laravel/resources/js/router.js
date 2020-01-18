import Vue from 'vue'
import VueRouter from 'vue-router'

import Overview from './pages/Overview.vue'
import Login from './pages/Login.vue'

// Use VueRouter
Vue.use(VueRouter)

// Mapping Path and Components
const routes = [
    {
        path: '/',
        component: Overview
    },
    {
        path: '/login',
        component: Login
    }
]

// Init VueRouter
const router = new VueRouter({
    mode: 'history',
    routes
})

// Export VueRouter Instance
export default router