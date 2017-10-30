<template>

<div class="header">
     <slot></slot>
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

<style>
   .header{
       height: 40px;
       width:100%;
       background:#ec887e;
       text-align:center;
       line-height:38px;
       color:#f9f9f9;
       position: fixed;
       
   }
</style>



