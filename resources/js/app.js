import Moment from 'moment/moment'
import Vue from 'vue'
import Vuelidate from 'vuelidate/src'
import axios from 'axios'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import App from './App.vue'
import './helpers/filters'
import Helper from './helpers/Helpers.js'
import Router from './router/index.js'
import store from './store'

const { times } = require('lodash')

require('./bootstrap')

axios.defaults.withCredentials = true


Vue.use(Moment, 'pt-br')
Vue.use(Vuelidate)

Vue.prototype.$moment = Moment
Vue.prototype.$helpers = Helper

const app =new Vue({
    render: h => h(App),
    router: Router,
    vuetify: new Vuetify({
        defaultAssets: {
            font: true,
            icons: 'md'
        },
        icons: {
            iconfont: 'md',
        },
        theme: {
            dark: false,
        },
        themes: {
            light: {
                primary: "#4682b4",
                secondary: "#b0bec5",
                accent: "#8c9eff",
                error: "#b71c1c",
            },
        },
    }),
    store
}).$mount('#app')


