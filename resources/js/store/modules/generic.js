const state = {
  accountActivitySector: null,
  currencies: null,
  currentUser: null,
  currentSalesman: null,
  permissions: null,
  salesmans: null,
  users: null
}

const getters = {
  ACCOUNT_ACTIVITY_SECTOR: state => state.accountActivitySector,
  CURRENCIES: state => state.currencies,
  CURRENT_USER: state => state.currentUser,
  CURRENT_SALESMAN: state => state.currentSalesman,
  PERMISSIONS: state => state.permissions,
  SALESMANS: state => state.salesmans,
  USERS: state => state.users
}

const mutations = {

  SET_CURRENT_USER: function (state, data) {
    state.currentUser = data
  },
  SET_CURRENT_SALESMAN: function (state, data) {
    state.currentSalesman = data
  },
  SET_PERMISSIONS: function (state, data) {
    state.permissions = data
  },
  SET_PERSON_LANGUAGES: function (state, data) {
    state.personLanguages = data
  },
  SET_PERSON_ROLES: function (state, data) {
    state.personRoles = data
  },
  SET_USERS: function (state, data) {
    state.users = data
  }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
