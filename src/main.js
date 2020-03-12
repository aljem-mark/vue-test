import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2';
import vueSmoothScroll from 'vue2-smooth-scroll'
import vSelect from 'vue-select'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import store from './store'
import '@/assets/css/tailwind.css'
import 'vue-select/dist/vue-select.css';

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(vueSmoothScroll)

Vue.component('v-select', vSelect)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
