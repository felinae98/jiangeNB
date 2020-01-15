import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import drizzleVuePlugin from '@drizzle/vue-plugin'
import drizzleOptions from './drizzleOpions'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(Vuex)
const store = new Vuex.Store({ state: {} })

Vue.use(drizzleVuePlugin, { store, drizzleOptions })

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
