import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
Vue.use(Router)
Vue.use(VueAxios, axios)


const router = new Router({
 routes: [
   {
     path: '/',
     name:'Weather',
   },
  ]
})

new Vue({
 el: '#app',
 components: {
   App
 },
 template: '<App />'
}) 
