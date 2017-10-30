<template>
 <div>
    <MHeader>Add</MHeader>
<div class="content">
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
        <button class="but" @click="add">提交</button>
      </div>
</div>

 </div>

</template>

<script>
import MHeader from "../base/MHeader.vue";
import axios from "axios"
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

   add(){
      axios.post('/api/book',this.book).then(res=>{
        this.book= {
        bookName: "",
        bookCover: "",
        bookInfo: "",
        bookPrice: ""
      }
        
        this.$router.push('/list');
         
      })
    }
  },
  components: { MHeader },
  computed: {}
};


console.log(this.book)
</script>

<style scoped lang="less">
.content div {
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
</style>


