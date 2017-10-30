import Vue from 'vue';
import Router from 'vue-router';



Vue.use(Router);
import Home from "../components/Home.vue";
import List from "../components/List.vue";
import Collect from "../components/Collect.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";

export default new Router({
  routes: [{
      path: "/",
      component: Home
    },
    {
      path: "/home",
      component: Home
    },
    {
      path: "/list",
      component: List
    },
    {
      path: "/collect",
      component: Collect
    },
    {
      path: "/add",
      component: Add
    },
    {
      path: "/update/:id",
      component: Update,
      name:'update'
    },
    {
      path: "*",
      component: Home
    }


  ]
});
