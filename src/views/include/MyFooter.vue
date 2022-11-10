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
  text-align: center;
  font-size: .8em;
  color:#555;
}
</style>





