<template>
  <div>
    <MHeader>List</MHeader>
    <div class="content">


   <Loading :isLoading="isLoading" :data="books"></Loading>

<ul class="boox" v-if="!isLoading&&books.length">
  <li v-for="bo in books" :key="bo.id">
      <div class="bookimg">
          <img :src="bo.bookCover"  alt="">
      </div>

      <div class="bookinfo">
          <div class="pbookname">
             <div class="bookname">{{bo.bookName}}</div>
             <span class="bookauthor">{{bo.bookInfo}}</span>
          </div>
         <div class="space"></div>
         <div class="bookprice">
            <span>￥{{bo.bookPrice}}</span>
            <a href="javascript:;" @click="remove(bo.id)">删除</a>
           <router-link tag="button" :to="{name:'update',params:{id:bo.id}}">修改</router-link>
            
           </div> 
      </div>
     
      
  </li>
</ul>

    </div>


  </div>
</template>

<script>
import MHeader from "../base/MHeader.vue";
import axios from "axios";
import Loading from "../base/Loading.vue";
export default {
  data() {
    return {
      msg: "hello",
      books: [],
      isLoading: true
    };
  },

  created() {
    setTimeout(() => {
      this.getBooks();
    }, 500);
  },
  activated() {
    this.getBooks();
  },

  methods: {
    getBooks() {
      axios.get("/api/book").then(res => {
        this.books = res.data.reverse();
        this.isLoading = false;
        console.log(res.data);
      });
    },

    // remove(id) {
    //   axios.delete("/api/book?id=" + id).then(res => {
    //     this.books = this.books.filter(item => item.id !== id);
    //     console.log(this.books);
    //   });
    // }
    remove(id) {
      // 通过id删除某一项 成功后将页面上原有的数据也一并删除
      axios.delete("/api/book?id=" + id).then(res => {
        this.books = this.books.filter(item => item.id !== id);
      });
    }
  },
  components: { MHeader, Loading },
  computed: {}
};
</script>

<style scoped lang="less">
ul {
  li {
    
    border-bottom: 1px solid #e1e1e1;
    padding-top: 10px;
    display: -webkit-box;
    width: auto;

    vertical-align: middle;
    height: 110px;
    position: relative;
    .bookimg {
      position: relative;
      height: 100px;
      width: 100px;
      margin-left: 10px;
      overflow: hidden;
      text-align: center;

      img {
        display: inline-block;
        width: auto;
        max-width: 100px;
        height: 100px;
        vertical-align: middle;
      }
    }
    .bookinfo {
      margin-left: 10px;
      position: relative;
      height: 100%;
      margin-top: -2px;
      padding-right: 10px;
     

      .pbookname {
        color: #232326;
        font-size: 15px;
        line-height: 22px;
        height: 40px;
        .bookname {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .bookauthor {
          display: block;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 12px;
          color: #848689;
          margin-top: 0px;
        }
      }

      .space {
        height: 40px;
        margin: 0px;
        overflow: hidden;
        line-height: 25px;
      }

      .bookprice {
     
        height: 20px;
        overflow: hidden;
        width: 100%px;
        
        line-height: 20px;
        margin-right: 10px;
        span {
          color: #f23030;
          font-size: 20px;
        }
        a,button {
        
          margin-left: 10px;

          font-size: 15px;
          text-decoration: none;
          border: 1px solid #f23030;
          background: #f23030;
          color: #fff;
          border-radius: 2px;
          
        }
      }
    }
  }
}
</style>


