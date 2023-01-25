<script setup lang="ts">
import {onUpdated, computed, ref} from "vue"
import usePageinfoStore from "@/stores/pageinfo"
const pageinfoStore = usePageinfoStore();

// 主页不再显示logo，2023年春节主题
const isShowLogo = computed(()=>{
  return pageinfoStore.routeName!='home';
});

</script>

<template>

  <div class="log-box" v-show="isShowLogo">
    <img alt="Vue logo" class="logo" src="@/assets/logo.png" />
    <img alt="Vue logo" src="@/assets/logo.svg" width="30" height="30" />
  </div>

  <nav class="nav-box">
    <router-link active-class="active" :to="{name:'home'}">主页</router-link>
    <router-link active-class="active" :to="{name:'product'}">产品</router-link>
    <router-link active-class="active" :to="{name:'news'}">新闻</router-link>
    <router-link active-class="active" :to="{name:'about'}">关于</router-link>
  </nav>

  <div>
    <RouterView />
  </div>

  <MyFooter></MyFooter>


</template>

<style scoped>
.active{
  color:red;
  font-weight: 700;
}

.log-box{
  padding:1em .5em;
  /* text-align: center; */
  border-bottom: 1px solid #999;
  display: flex;
  justify-content: space-between;
}

.logo{
  height: auto;
  width: 50%;
}

.nav-box{
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  background-color: #e0e0e0;
  height:50px;
  text-align: center;

  display: flex;
  justify-content: space-between;
  align-items: center;

}

.nav-box > * {
  flex:1;
}
</style>
