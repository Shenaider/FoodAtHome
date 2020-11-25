import Moment from 'moment/moment'
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import axios from 'axios'

import Vuetify from 'vuetify'

import AppComponent from './App.vue'
import './helpers/filters'
import Helper from './helpers/Helpers.js'
import router from './router'
import store from './store'

const { times } = require('lodash')

require('./bootstrap')

window.Vue = require('vue')

axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://foodathome.test'


Vue.use(Moment, 'pt-br')
Vue.use(Vuetify, {})
Vue.use(Vuelidate, {})

Vue.prototype.$moment = Moment
Vue.prototype.$helpers = Helper

Vue.component('app',AppComponent)

const app = new Vue({
    el: '#app',
    router,
    store,
    data: {},
    render: h => h(AppComponent)
})

