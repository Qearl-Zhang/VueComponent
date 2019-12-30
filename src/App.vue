<template>
  <div>
    <h2>{{title}}</h2>
    <Blogs />
  </div>
</template>

<script>

import Blogs from './components/Blogs'
export default {
  data() {
    return {
      title:'App组件'
    }
  },
  components:{
    Blogs
  }

}
</script>

<style scoped>

</style>