import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'

Vue.use(Router)

const routes = [{
    path: '/home',
    component: Home
},
{
    path:'/login',
    component: Login
},
{
    path: '/signup',
    component: SignUp
}]

const router = new Router({
    routes,
    mode: 'history'
})

export default router