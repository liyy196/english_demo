<template>
  <div id="home">
    <mt-swipe :auto="2000" style="height:120px;border:solid 1px skyblue;">
      <mt-swipe-item v-for="item in items" :key="item.id">
          <img :src="item.url" class="img">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 九宫格 -->
    <div class='my-list'>
      <ul>
        <li v-for="grid in grids" :key='grid.id'>
          <a href="#">
            <img :src="grid.src" alt="">
          </a>
          <p>{{grid.title}}</p>
          </li>
      </ul>
    </div>
  </div>
</template>
<script>
import src1 from'../../assets/记录.png'
import src2 from'../../assets/分享.png'
import src3 from'../../assets/设置.png'
import src4 from'../../assets/社区互动.png'
import src5 from'../../assets/收藏.png'
import src6 from'../../assets/退出.png'
var grids=[
    {id:1,src:src1,title:'学习记录'},
    {id:2,src:src2,title:'分享'},
    {id:3,src:src3,title:'设置'},
    {id:4,src:src3,title:'互动'},
    {id:5,src:src5,title:'收藏'},
    {id:6,src:src6,title:'退出'},
]
export default {
  name: "Home",
  data() {
    return {
      items: [
        {url: "http://localhost:8080/static/img1.jpg"},
        {url: "http://localhost:8080/static/img2.jpg"},
        {url: "http://localhost:8080/static/img3.jpg"}
      ],
      grids:grids
    };
  }
  //   created() {
  //     this.$axios
  //       .get()
  //       .then(res => {})
  //       .catch(err => {
  //         console.log("数据错误");
  //       });
  //   }
};
</script>
<style lang='css' scoped>
.img {
  width: 100%;
}
.my-list{
  width: 100%;
}
.my-list ul{
  display: flex;
  flex-wrap: wrap;
   border-radius: 50%;
}
.my-list ul li{
  width: 33%;
  height: 100px;
  text-align: center;
  font-size: 14px;
  margin-top: 15px;
  

}
.my-list ul li a{
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 0 auto;
 

}
.my-list ul li a img{
  width:40px;
}
</style>


