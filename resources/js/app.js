import Moment from 'moment/moment'
import Vue from 'vue'
import Vuelidate from 'vuelidate'

import Vuetify from 'vuetify'

import AppComponent from './App.vue'
import UsersComponent from './components/users.vue'
import './helpers/filters'
import Helper from './helpers/Helpers.js'
import router from './router'
import store from './store'

const { times } = require('lodash')

require('./bootstrap')

window.Vue = require('vue')


Vue.use(Moment, 'pt-br')
Vue.use(Vuetify, {})
Vue.use(Vuelidate, {})

Vue.prototype.$moment = Moment
Vue.prototype.$helpers = Helper

Vue.component('app',AppComponent)
Vue.component('users',UsersComponent)

window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const app = new Vue({
    el: '#app',
    router,
    store,
    data: {},
})

