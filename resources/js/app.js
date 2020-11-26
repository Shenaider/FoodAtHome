import Moment from 'moment/moment'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'

import Vuetify from 'vuetify'

import App from './App.vue'
import './helpers/filters'
import Helper from './helpers/Helpers.js'
import Router from './router/index.js'
import store from './store'

const { times } = require('lodash')

require('./bootstrap')

window.Vue = require('vue')

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://foodathome.test'


Vue.use(Moment, 'pt-br')
Vue.use(Vuetify)
Vue.use(Vuelidate)

Vue.prototype.$moment = Moment
Vue.prototype.$helpers = Helper

new Vue({
    router: Router,
    Vuetify,
    render: h => h(App),
    store
}).$mount('#app')

