import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import SignUp from './views/SignUp.vue'
import Room from './views/Room.vue'
import Profile from './views/Profile.vue'
import CreateRoom from './views/CreateRoom.vue'
import Matched from './views/Matched.vue'
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
},
{
    path: '/room/:id',
    component: Room
},
{
    path: '/createRoom',
    component: CreateRoom
},
{
    path: '/profile',
    component: Profile
},
{
    path: '/matched',
    component: Matched
},
{
    path: '/',
    component: Login
}
]

const router = new Router({
    routes,
    mode: 'history'
})

export default router