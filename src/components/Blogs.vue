<template>
  <div>
    <h2>Blog列表</h2>
    <ul>
      <Blog v-for="(blog, index) in blogs" :key="blog.id" :blog ="blog"/>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import Blog from './Blog'
  export default {
    name:'',
    components:{ // 注册局部组件,只能在当前组件使用
      Blog
    },
    data() {
      return {
        blogs :[
          {id:1,title:'Blog111'},
          {id:5,title:'Blog555'},
          {id:9,title:'Blog999'},
        ]
      }
    },
  }
</script>

<style scoped>
  h2 {
    color: red
  }
</style>
