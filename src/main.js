import Vue from 'vue'
import gsap from "gsap";

import  VSimpleScrollTrigger  from "gsap/ScrollTrigger";
gsap.registerPlugin(VSimpleScrollTrigger);


import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
