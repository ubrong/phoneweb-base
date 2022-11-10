import { createRouter, createWebHistory } from 'vue-router'
import useCounterStore from "@/stores/counter"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=>import('../views/Home.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: ()=>import('@/views/Product.vue')
    },
    {
      path: '/news',
      name: 'news',
      component:  ()=>import('@/views/News.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue')
    }
  ]
})

router.beforeEach((to, from ,next)=>{

  // 访客次数+1
  const counterStore = useCounterStore();
  counterStore.info.counter++;

  // 加载页面
  next();
});

export default router
