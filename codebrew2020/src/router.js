import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

Vue.use(Router)

const routes = [{
    path: '/home',
    component: Home
},
{
    path:'/login',
    component: Login
}]

const router = new Router({
    routes,
    mode: 'history'
})

export default router