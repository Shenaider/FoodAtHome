import { CustomAxios } from '@/api/caxios'
import { Loading } from 'element-ui'

const state = {
  accountActivitySector: null,
  accountTypes: null,
  budgetStates: null,
  budgetTypes: null,
  countries: null,
  currencies: null,
  currentUser: null,
  currentSalesman: null,
  languages: null,
  permissions: null,
  personLanguages: null,
  personRoles: null,
  salesmans: null,
  users: null
}

const getters = {
  ACCOUNT_ACTIVITY_SECTOR: state => state.accountActivitySector,
  ACCOUNT_TYPES: state => state.accountTypes,
  BUDGET_STATES: state => state.budgetStates,
  BUDGET_TYPES: state => state.budgetTypes,
  COUNTRIES: state => state.countries,
  CURRENCIES: state => state.currencies,
  CURRENT_USER: state => state.currentUser,
  CURRENT_SALESMAN: state => state.currentSalesman,
  LANGUAGES: state => state.languages,
  PERMISSIONS: state => state.permissions,
  PERSON_LANGUAGES: state => state.personLanguages,
  PERSON_ROLES: state => state.personRoles,
  SALESMANS: state => state.salesmans,
  USERS: state => state.users
}

const mutations = {
  SET_ACCOUNT_ACTIVITY_SECTOR: function (state, data) {
    state.accountActivitySector = data
  },
  SET_ACCOUNT_TYPES: function (state, data) {
    state.accountTypes = data
  },
  SET_BUDGET_STATES: function (state, data) {
    state.budgetStates = data
  },
  SET_BUDGET_TYPES: function (state, data) {
    state.budgetTypes = data
  },
  SET_COUNTRIES: function (state, data) {
    state.countries = data
  },
  SET_CURRENCIES: function (state, data) {
    state.currencies = data
  },
  SET_CURRENT_USER: function (state, data) {
    state.currentUser = data
  },
  SET_CURRENT_SALESMAN: function (state, data) {
    state.currentSalesman = data
  },
  SET_LANGUAGES: function (state, data) {
    state.languages = data
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
  SET_SALESMANS: function (state, data) {
    state.salesmans = data
  },
  SET_USERS: function (state, data) {
    state.users = data
  }
}
const actions = {
  GET_APP_INIT_DATA: function ({commit}) {
    let loader = Loading.service()
    return CustomAxios.get('/init-app')
      .then(function (response) {
        commit('SET_ACCOUNT_ACTIVITY_SECTOR', response.data.data.accountActivitySector)
        commit('SET_ACCOUNT_TYPES', response.data.data.accountTypes)
        commit('SET_BUDGET_STATES', response.data.data.budgetStates)
        commit('SET_BUDGET_TYPES', response.data.data.budgetTypes)
        commit('SET_COUNTRIES', response.data.data.countries)
        commit('SET_CURRENT_USER', {
          id: response.data.data.sessionInfo.UserId,
          username: response.data.data.sessionInfo.Username,
          hash: response.data.data.sessionInfo.Hash
        })
        commit('SET_CURRENT_SALESMAN', response.data.data.sessionInfo.SalesmanId)
        commit('SET_LANGUAGES', response.data.data.sessionInfo.Translations)
        commit('SET_PERMISSIONS', response.data.data.sessionInfo.Permissions)
        commit('SET_PERSON_LANGUAGES', response.data.data.languages)
        commit('SET_PERSON_ROLES', response.data.data.personRoles)
        commit('SET_SALESMANS', response.data.data.salesmans)
        commit('SET_USERS', response.data.data.users)
        commit('SET_CURRENCIES', response.data.data.currencies)
        loader.close()
      }).catch((error) => {
        if (error.message === 'Network Error') {
          loader.close()
        }
        loader.close()
      })
  },
  GET_INIT_ACCOUNTS_PERSONS_SEARCH ({commit}, context) {
    return CustomAxios.get('init-account-persons-search')
      .then(function (response) {
        commit('account/SET_AUX_COMPANIES_DROPDOWN', response.data.data.companies, {root: true})
        commit('person/SET_AUX_PERSONS_DROPDOWN', response.data.data.persons, {root: true})
      })
      .catch((error) => {
        context.this.$notify({
          title: context.this.languages.ERROR,
          message: context.this.languages[error],
          type: 'error'
        })
      })
  },
  GET_INIT_BUSINESSES_SEARCH ({commit}, context) {
    return CustomAxios.get('init-account-persons-search')
      .then(function (response) {
        commit('person/SET_AUX_PERSONS_DROPDOWN', response.data.data.persons, {root: true})
      })
      .catch((error) => {
        context.this.$notify({
          title: context.this.languages.ERROR,
          message: context.this.languages[error],
          type: 'error'
        })
      })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
