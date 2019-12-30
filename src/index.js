// console.log('hello webpack123')
// document.getElementById('root').innerHTML = '<h1>hello hahaha123</h1>'

// import logo from "./assets/imgs/logo.png"
// import './assets/css/my.css'

// const image = new Image()
// image.src = logo
// document.body.appendChild(image)
// document.getElementById('root').innerHtml = '<h2>Hello halo</h2>'

// import Vue from 'vue/dist/vue.esm.js'
import Vue from 'vue'
import App from './App'  // 引入自定义组件

new Vue({
  // el:'#root',
  // 注册局部组件
  components:{  // 注册组件
    App
  },
  template:'<App/>'

}).$mount('#root')