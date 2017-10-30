<template>


    <swiper :options="swiperOption">
    <swiper-slide v-for="slide in swiperSliders" :key="slide">
        <div class="box">
            <i></i>
            <em>外国文学</em>
            <img :src=slide alt="">
        </div>


    </swiper-slide>
    
    
    
  </swiper>
</template>

<script>
export default {
   
 props:{
             swiperSliders:{type:Array,default:[]},
        },
  data() {
    return {
       
      swiperOption: {
        loop: true,
        autoplay: 2000,
        setWrapperSize: true,
        pagination: ".swiper-pagination",
        autoplayDisableOnInteraction: false,
        paginationClickable: true,

        observeParents: true,

        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        slidesPerView: 4,
        centeredSlides: true,

        spaceBetween: 6
      }
    };
  },

  computed: {}
};
</script>

<style scoped lang="less">
.box {
    margin-left:-120px;
  position: relative;

  i {
    display: block;
    height: 70px;
    width: 70px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px 4px 0px 0px;
  }

  em {
    display: block;
    position: absolute;
    border-radius: 0px 0px 4px 4px;
    top: 50px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.4);
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #fff;
    overflow: hidden;
    width: 70px;
    height: 20px;
    font-size: 12px;
  }

  img {
    height: 70px;
    width: 70px;
    border-radius: 6px;
    margin: 0;
  }
}
</style>


