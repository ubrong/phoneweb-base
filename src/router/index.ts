import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import useCounterStore from "@/stores/counter"
import usePageinfoStore from "@/stores/pageinfo"

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL), //注释此行，web服务器未配置重定向时，刷新会出现404
  history: createWebHashHistory(), //如需seo，不要选择此项
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

  const pageinfoStore = usePageinfoStore();
  pageinfoStore.routeName = to.name as string;
  
  // 加载页面
  next();
});
export default router
