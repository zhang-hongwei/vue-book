<template>

<div>
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
   
   <Tab></Tab>
</div>


</template>

<script>
import Tab from "./base/Tab.vue"
export default {
components:{Tab}
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  background-color:#fff;
}

.content {
  position: fixed;
  top: 40px;
  bottom: 60px;
  left: 0;
  right: 0;
  overflow: scroll;
  
  }


* {
  margin: 0;
  padding: 0;
}

ul,li{
  list-style: none;
}

em, i {
    text-decoration: none;
    font-style: normal;
}
</style>
