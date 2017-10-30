<template>
 
  <div>
     <MHeader>Home</MHeader>

   <div class="content">
        <div class="sbox">
               <Swiper :swiperSliders="sliders"></Swiper>
        </div>

<Loading :isLoading="isLoading" :data="hot"></Loading>

<template v-if="!isLoading&&hot.length">

         <ul>
             <li v-for="h in hot" :key="h.id">
               <div>
               <img :src='h.bookCover' alt="">
               <h3>{{h.bookName}}</h3>

               </div>
             </li>
         </ul>


</template>
   </div>

  </div>
</template>

<script>
import MHeader from "../base/MHeader.vue";
import Swiper from "../base/Swiper.vue";
import axios from "axios";
import Loading from "../base/Loading.vue";
export default {
  data() {
    return {
      sliders: [],
      hot: [],
      isLoading: true
    };
  },

  created() {
    this.getSliders();
    setTimeout(() => {
      this.getHot();
    }, 500);
  },
 activated(){
       this.getHot()
  },

  methods: {
    getSliders() {
      axios.get("/api/sliders").then(res => {
        //  this.sliders = res.data;
        this.sliders = res.data;
        // console.log(res.data);
      });
    },
    getHot() {
      axios.get("/api/hot").then(res => {
        this.hot = res.data;
        // console.log(this.hot);
        this.isLoading = false;
      });
    }
  },
  components: { MHeader, Swiper, Loading },
  computed: {}
};
</script>

<style scoped lang = "less">
.content {
  position: fixed;
  top: 40px;
  bottom: 60px;
  left: 0;
  right: 0;
  overflow: scroll;
  .sbox {
    margin-top: 4px;
    padding-top: 5px;
    border-top: 1px solid #d1d1d1;
    border-bottom: 1px solid #d1d1d1;
    width: 100%;
  }
  li {
    display: inline-block;

    margin-left: 8px;
    margin-top: 14px;

    overflow: hidden;

    h3 {
      font-size: 14px;
      font-weight: 200;
      width: 96px;
      text-align: center;
      line-height: 16px;
      text-overflow: hidden;
      white-space: nowrap;
    }

    img {
      display: block;
      height: 100px;
      width: 96px;
    }
  }
}
</style>


