import {ref} from "vue"
import { defineStore } from 'pinia'


export default defineStore('counterStore', ()=>{
  
  const info = ref({
    counter:0 //记录访客次数
  });

  // 增加1
  function increment(){
    info.value.counter++;
  }

  // 减少1
  function decrement(){
    info.value.counter--;
  } 

  return {info, increment, decrement};


}, {
  persist:{
    storage: localStorage,
    paths: ['info']
  }
});

