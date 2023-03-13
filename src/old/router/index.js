import { createRouter, createWebHistory } from 'vue-router'
import middlewarePipeline from './middlewarePipeline'
import auth from '@/middleware/auth'
import admin from '@/middleware/admin'
import store from '@/store'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/main/Index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/main/About.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/main/Contact.vue')
    },
    {
      path: '/login',
      name: 'auth.login',
      component: () => import('@/views/auth/Login.vue'),

    },
    {
      path: '/register',
      name: 'auth.register',
      component: () => import('@/views/auth/Register.vue'),
    },
    {
      path: '/account',
      name: 'auth.myAccount',
      component: () => import('@/views/auth/MyAccount.vue'),
      meta:{
        middleware:[auth],
      }
    },
    {
      path: '/forgot-password',
      name: 'auth.forgotPassword',
      component: () => import('@/views/auth/ForgotPassword.vue'),
    },
    {
      path: '/reset-password/:token',
      name: 'auth.resetPassword',
      component: () => import('@/views/auth/ResetPassword.vue'),
    },
    {
      path: '/products',
      name: 'products.index',
      component: () => import('@/views/product/Index.vue')
    },
    {
      path: '/products/:id',
      name: 'products.show',
      component: () => import('@/views/product/Show.vue')
    },
    {
      path: '/cart',
      name: 'cart.index',
      component: () => import('@/views/cart/Index.vue'),
      meta:{
        middleware:[auth],
      }
    },
    // {
    //   path: '/admin',
    //   name: 'admin',
    //   meta:{
    //     middleware:[admin],
    //   }
    // },
    {
      path: '/:pathMatch(.*)*', 
      name: 'NotFound',
      component: () => import('@/views/error/NotFound.vue'),
    }
  ]
});

router.beforeEach((to,from,next)=>{
  const middleware = to.meta.middleware;
  if(!middleware ){
    return next();
  }
  const context = {to,from,next,store};
  middleware[0]({
    ...context,
    next:middlewarePipeline(context,middleware,1),
  })
});

export default router
