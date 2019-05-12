<template>
  <div id="app">
    <!-- 顶部栏 -->
    <mt-header title="英语学习">
      <router-link to='/' slot='left'> 
      <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!-- 路由组件出口 -->
    <router-view/>

    <!-- 底部栏 -->
    <mt-tabbar id='footer' v-model="selected">
      <mt-tab-item id="home">
        <img src="./assets/home.png" slot="icon">
        首页
      </mt-tab-item>
      <mt-tab-item id="reading">
        <img src="./assets/yuedu.png" slot="icon">
        阅读
      </mt-tab-item>
      <mt-tab-item id="word">
        <img src="./assets/dingdan.png" slot="icon">
        单词
      </mt-tab-item>
      <mt-tab-item id="lianxi">
        <img src="./assets/lianxi.png" slot="icon">
        练习
      </mt-tab-item>
      <mt-tab-item id="teacher">
        <img src="./assets/teacher.png" slot="icon">
        老师推荐
      </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<script>
export default {

  name: 'App',
  data(){
    return{
      selected:''
    }
    // 编程式导航
  },watch:{
    selected:function(newV,oldV){
      this.$router.push({
        name:this.selected
      });

    }
  }

}
</script>

<style scoped>
 
</style>
