// console.log('hello webpack123')
// document.getElementById('root').innerHTML = '<h1>hello hahaha123</h1>'

import logo from "./assets/imgs/logo.png"
import './assets/css/my.css'

const image = new Image()
image.src = logo
document.body.appendChild(image)
document.getElementById('root').innerHtml = '<h2>Hello halo</h2>'