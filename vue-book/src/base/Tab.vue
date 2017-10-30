<template>
 <div>
     <ul class="tab">
       

     <router-link to="/" exact tag="li">
       <i class="iconfont icon-index"></i>
       <span>首页</span>
     </router-link>

 <router-link to="/list" tag="li">
       <i class="iconfont icon-liebiao"></i>
       <span>列表</span>
 </router-link>

 <router-link to="/collect" tag="li">
       <i class="iconfont icon-shoucang"></i>
       <span>收藏</span>
 </router-link>

 <router-link to="/add" tag="li">
       <i class="iconfont icon-add1"></i>
       <span>添加</span>
 </router-link>
</ul>
 </div>
 
 

</template>

<script>
export default {
  data() {
    return { msg: "hello" };
  },

  methods: {},
  components: {},
  computed: {}
};
</script>

<style scoped lang="less">
.tab {
  height: 60px;
  width: 100%;
  background: #f8f8f8;
  position: fixed;
  bottom: 0;
  display: flex;
  border-top: 1px solid #c0c0c0;

  li {
    font-size: 10px;
    display: flex;
    color: #a2a2a2;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    i {
      font-size: 22px;
    }
  }
  .router-link-active {
    color: red;
  }
}
</style>



