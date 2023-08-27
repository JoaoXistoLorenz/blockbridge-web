import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/dexs',
    name: 'Dexs',
    component: () => import(/* webpackChunkName: "home" */ '../views/Dexs.vue')
  },
  {
    path: '/lending',
    name: 'Lending',
    component: () => import(/* webpackChunkName: "home" */ '../views/Lending.vue')
  },
  {
    path: '/liquid-staking',
    name: 'LiquidStaking',
    component: () => import(/* webpackChunkName: "home" */ '../views/LiquidStaking.vue')
  },
  {
    path: '/parachain',
    name: 'Parachain',
    component: () => import(/* webpackChunkName: "home" */ '../views/Parachain.vue')
  },
  {
    path: '/plataforma',
    name: 'Plataforma',
    component: () => import(/* webpackChunkName: "home" */ '../views/Plataforma.vue')
  },
  {
    path: '/nova-solucao',
    name: 'NovaSolucao',
    component: () => import(/* webpackChunkName: "home" */ '../views/NovaSolucao.vue')
  },
  {
    path: '/admin',
    name: 'Login',
    component: () => import(/* webpackChunkName: "home" */ '../views/Login.vue')
  },
  {
    path: '/admin-home',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "home" */ '../views/Admin.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
  },
]

const router = new VueRouter({
  routes
})
export default router;



