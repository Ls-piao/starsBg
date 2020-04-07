import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const Star = ()=>import('@/components/star-demo')
Vue.use(Router)

export default new Router({
  routes: [
   
    {
      path: '/star',
      name: 'Star',
      component: Star
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/',
      name: 'Star',
      component: Star
    }
    
  ]
})
