import Vue from 'vue'
import { uuid } from 'vue-uuid'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  instanceUid: uuid.v4(),
  jwtToken: null,
  userCredentials: {
    username: userName, // eslint-disable-line no-undef
    hash: userHash, // eslint-disable-line no-undef
    language: userLang, // eslint-disable-line no-undef
    companyId: companyId // eslint-disable-line no-undef
  }
}

const getters = {
  AUTHENTICATED: state => {
    if (state.jwtToken) {
      return true
    }
    return false
  }
}

const mutations = {
  JWT_TOKEN: (state, token) => {
    state.jwtToken = token
  }
}

export const AuthenticationStore = new Vuex.Store({
  state,
  getters,
  mutations
})
