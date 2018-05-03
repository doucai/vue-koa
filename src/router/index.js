import Vue from 'vue'
import Router from 'vue-router'
import shoppingMaill from '@/components/shoppingMaill'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shoppingMaill',
      component: shoppingMaill
    }
  ]
})
