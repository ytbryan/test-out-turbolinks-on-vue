/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %>
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue/dist/vue.esm'
import App from './app.vue'
import VueAdapter from 'vue-turbolinks'

// document.body.appendChild(document.createElement('hello'))

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  mixins: [VueAdapter],
  beforeMount() {
    console.log(`beforeMount is called.`)
  },
  mounted() {
    console.log("mounted is called")
  },
  destroyed() {
    console.log("destroyed is called.")
  }
})

console.log(app)
