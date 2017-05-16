/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import App1 from './app.vue'
import App2 from './app2.vue'


const app1 = new Vue({
  el: '#app1',
  template: '<App1/>',
  components: { App1 }
})

const app2 = new Vue({
  el: '#app2',
  template: '<App2/>',
  components: { App2 }
})



console.log(app1)

console.log(app2)
