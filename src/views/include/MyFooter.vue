<script setup lang="ts"> 
import useCounterStore from "@/stores/counter"
const counterStore = useCounterStore();
</script>

<template>
  <div class="footer">
    您已累积访问 <b>{{counterStore.info.counter}}</b> 次
  </div>
</template>

<style scoped>
.footer{
  position: absolute;
  bottom:60px;
  width:100%;
  text-align: center;
  font-size: .8em;
  color:#000;
}
</style>





