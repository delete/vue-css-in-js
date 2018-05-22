import Vue, { CreateElement, VNode } from 'vue'
import App from './app'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

Vue.use(Vuetify);

import '../node_modules/mdi/css/materialdesignicons.min.css'
import '../node_modules/vuetify/dist/vuetify.min.css';

new Vue({
  el: '#app',
  render: (h: CreateElement): VNode => h(App)
})
