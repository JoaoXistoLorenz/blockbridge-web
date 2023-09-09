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
    path: '/escalabilidade',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/dexs',
    name: 'Dexs',
    component: () => import(/* webpackChunkName: "dexs" */ '../views/Dexs.vue')
  },
  {
    path: '/lending',
    name: 'Lending',
    component: () => import(/* webpackChunkName: "lending" */ '../views/Lending.vue')
  },
  {
    path: '/liquid-staking',
    name: 'LiquidStaking',
    component: () => import(/* webpackChunkName: "liquid" */ '../views/LiquidStaking.vue')
  },
  {
    path: '/nfts',
    name: 'Nfts',
    component: () => import(/* webpackChunkName: "nfts" */ '../views/Nfts.vue')
  },
  {
    path: '/plataforma/:id',
    name: 'Plataforma',
    component: () => import(/* webpackChunkName: "plataforma" */ '../views/Plataforma.vue')
  },
  {
    path: '/nova-solucao',
    name: 'NovaSolucao',
    component: () => import(/* webpackChunkName: "novasolucao" */ '../views/NovaSolucao.vue')
  },
  {
    path: '/admin',
    name: 'Login',
    component: () => import(/* webpackChunkName: "llogin" */ '../views/admin/Login.vue')
  },
  {
    path: '/admin-home',
    name: 'Admin',
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "adminhome" */ '../views/admin/Admin.vue')
  },
  {
    path: '/cadastro-plataforma',
    name: 'CadastroPlataforma',
    meta: {
      requiresAuth: true,
    },
    component: () => import(/* webpackChunkName: "adminhome" */ '../views/admin/CadastroPlataforma.vue')
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null || localStorage.getItem('token') == '') {
      next({name: 'NotFound'});
    } else {
      next();
    }
  }
  next();
});
export default router;



