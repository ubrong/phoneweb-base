import {ref} from "vue"
import { defineStore } from 'pinia'


export default defineStore('pageinfo', ()=>{
  
  const routeName = ref('xxx');//当前的路由名称

  return {routeName};
});

