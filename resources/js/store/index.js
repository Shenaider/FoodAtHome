import Vue from 'vue'
import Vuex from 'vuex'
// modules import
//import account from './modules/account'
//import business from './modules/business'
//import calendar from './modules/calendar'
//import contact from './modules/contact'
//import event from './modules/event'
//import feed from './modules/feed'
//import generic from './modules/generic'
//import group from './modules/group'
//import menu from './modules/menu'
//import person from './modules/person'
//import quotation from './modules/quotation'
//import reportAndContact from './modules/report-and-contact'
//import taskAndFutureAction from './modules/task-and-future-action'
//import travel from './modules/travel'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
const state = {
  webserviceUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:58390/Contracts/CrmDataService.svc' : '',
  websocketUrl: process.env.NODE_ENV !== 'production' ? 'http://localhost:58390/Contracts/CrmDataService.svc' : 'https://webservices.socem.pt:4497/SocemHUBSystem'
}

export default new Vuex.Store({
  modules: {
    //account,
    //business,
    //calendar,
    //contact,
    //event,
    //feed,
    //generic,
    //group,
    //menu,
    //person,
    //quotation,
    //reportAndContact,
    //taskAndFutureAction,
    //travel
  },
  state,
  strict: debug
})
