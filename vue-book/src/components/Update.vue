<template>
 <div class="content">
     <div class="header">
        <h3>修改页面</h3>
        <span @click="back">返回</span>
     </div>   
  <div class="box">
       <div>
        <label for="bookName">书名</label>
        <input type="text" id="bookName" v-model="book.bookName" placeholder="输入书名">
      </div>
      <div>
        <label for="bookCover">封面</label>
        <input type="text" id="bookCover" v-model="book.bookCover" placeholder="输入描述">
      </div>
      <div>
      <label for="bookInfo">详情</label>
      <input type="text" id="bookInfo" v-model="book.bookInfo" placeholder="输入链接">
      </div>
      <div>
        <label for="bookPrice">价格</label>
        <input type="text" id="bookPrice" v-model="book.bookPrice" placeholder="输入价格">
      </div>
      <div>
        <button class="but" @click="update">确认修改</button>
      </div>

</div>



 
 </div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      book: {
        bookName: "",
        bookCover: "",
        bookInfo: "",
        bookPrice: ""
      }
    };
  },

  methods: {
    back() {
      this.$router.go(-1);
    },
getBook(){
 axios.get('/api/book?id='+this.$route.params.id).then(res=>{
   this.book = res.data;
 })
},

update(){
axios.put('/api/book?id='+this.book.id,this.book).then(res=>{
  this.back()
})
},
  
    
  },
 
  created() {
 this.getBook()
  },
  activated() {
     this.getBook()
  },
  components: {},
  computed: {}
};


</script>

<style scoped lang="less">
.content {
  position: absolute;
  top: 0;
  left: 0;
 
  .header {
    height: 40px;
    width: 100%;
     background: #ec887e;
     text-align: center;
       color:#fff;
       line-height:40px;
     span{
       position: absolute;
       top:2px;left:10px;
     
     }

  }

.box{
  margin-top:40px;
  div {
   margin-bottom:10px;
  padding-left:6px;
  width: 90%;
  margin: 20px auto;

  label {
    float: left;
    line-height:26px;
    color:#555555
  }
  .but{
    text-align:center;

    height: 30px;width:60%;
    background:#ec887e;
    color:#fff;
    margin-left:50px;

  }
  
  input {
    height:24px;
    margin-left: 15%;
    display: block;
    width: 80%;
    border:1px solid #C9c9c9;
    text-indent: 10px;
     
  }
}
}




}







</style>


