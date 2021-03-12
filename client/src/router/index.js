import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Signup from '../components/Signup.vue'
import Login from '../components/Login.vue'
import Secret from '../components/Secret.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/secret',
    name: 'Secret',
    component: Secret
  }
]

const router = new VueRouter({
  routes
})

export default router
