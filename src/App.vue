<script setup lang="ts">
</script>

<template>

  <div class="log-box">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
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

</template>

<style scoped>
.active{
  color:red;
  font-weight: 700;
}

.log-box{
  padding:1em 0;
  text-align: center;
}

.logo{
  width: 80px;
  height: 80px;
}

.nav-box{
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  background-color: #ddd;
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
