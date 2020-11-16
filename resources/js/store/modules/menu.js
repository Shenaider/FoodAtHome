const state = {
  routeList: null,
  activeTabMenu: null
}

const getters = {
  ACTIVE_MENU: state => state.activeTabMenu,
  ROUTES: state => state.routeList
}

const mutations = {
  /**
   * Add to menu the object delivered from the account and business index
   * **/
  ADD_MENU: function (state, data) {
    state.routeList.push(data)
  },
  SET_FATHER_ACTIVE_MENU: function (state, data) {
    state.activeTabMenu = data
  },
  SET_ACTIVE_MENU: function (state, data) {
    state.activeTabMenu = data.index
  },
  REMOVE_MENU: function (state, data) {
    _.remove(state.routeList, function (n) { // eslint-disable-line no-undef
      return n.index === data
    })
  },
  SET_ROUTES: function (state, data) {
    if (state.routeList === null) {
      state.routeList = data
    }
  },
  UPDATE_ROUTES: function (state, data) {
    state.routeList = data
  }
}
const actions = {
  /**
   * Load the active menu saved from $router
   * **/
  SET_MENU: function (store, data) {
    return new Promise(function (resolve, reject) {
      let index = _.findIndex(state.routeList, function (n) { // eslint-disable-line no-undef
        return n.index === data.item_remove
      })
      resolve(index)
    }).then(function (response) {
      let father = null
      if (response !== -1) {
        father = state.routeList[response].father
        store.commit('SET_FATHER_ACTIVE_MENU', state.routeList[response].father)
        data.context.this.$router.push(state.routeList[response].father)
        store.commit('REMOVE_MENU', state.routeList[response].index)
      } else {
        father = ''
        store.commit('SET_FATHER_ACTIVE_MENU', '/')
      }
      return father
    })
  },
  GET_ACTIVE_MENU: function (store, data) {
    if (data.index !== '/persons' && data.index !== '/accounts/') {
      store.commit('SET_ACTIVE_MENU', data)
    } else {
      store.commit('SET_FATHER_ACTIVE_MENU', '/accounts')
    }
  },
  CHECK_MENU_CREATION: function (store, data) {
    return new Promise(function (resolve, reject) {
      /**
       * Verifies if the object already exists in menu or not with the same id
       * **/
      let menuItem = _.findIndex(state.routeList, function (routerVal) { // eslint-disable-line no-undef
        return routerVal.route.params.id == data.id && routerVal.father === data.father // eslint-disable-line eqeqeq
      })
      if (menuItem === -1) {
        let newMenu = {
          params: {
            id: data.id
          },
          path: data.father + '/' + data.id,
          father: data.father,
          index: data.father + '/' + data.id,
          permission: data.permission,
          route: {
            name: data.routeName,
            params: {
              id: data.id
            }
          },
          description: data.description,
          name: data.name,
          custom: true
        }
        if (data.name !== undefined) {
          newMenu.route.params.name = data.name
        }
        store.commit('ADD_MENU', newMenu)
        resolve()
      }
      state.routeList[menuItem].index = data.father + '/' + data.id
      state.routeList[menuItem].path = data.father + '/' + data.id
      store.commit('UPDATE_ROUTES', state.routeList)
      resolve(menuItem)
    }).then(function (response) {
      if (response === undefined) {
        store.commit('SET_ACTIVE_MENU', {
          index: data.father + '/' + data.id
        })
      } else {
        store.commit('SET_ACTIVE_MENU', {
          index: state.routeList[response].index
        })
      }
    })
  },
  SET_LOCAL_ROUTES: function (store, data) {
    return new Promise(function (resolve, reject) {
      /****
       * Iterates every route in $router so it can get any route that was used and is in historic so it wont
       *          disapear when loading or in cache
       * */
      _.forEach(data, function (routesLocal) { // eslint-disable-line no-undef
        /****
         * Verifies if the route has params (number) so it wont duplicate any father menu
         * */
        let matches = routesLocal.path.match(/\d/)
        if (matches && store.state.routeList !== null) {
          let routeToCopy = _.find(store.state.routeList, function (n) { return n.path === routesLocal.path }) // eslint-disable-line no-undef
          
          /****
           * If it doesn't exist it will be loaded to the menu
           * */
          if (routeToCopy === undefined) {
            resolve(routesLocal)
          }
        }
      })
    }).then(function (response) {
      store.commit('ADD_MENU', response)
    })
  },
  SET_CURRENT_ROUTER: function (store, data) {
    return new Promise(function (resolve, reject) {
      /****
       * Verifies if the route has params (number) so it wont duplicate any father menu
       * */
      if (data !== '') {
        let matches = data.path.match(/\d/)
        if (matches && store.state.routeList !== null) {
          let routeToCopy = _.find(store.state.routeList, function (n) { return n.path === data.path }) // eslint-disable-line no-undef
          let childRouteToCopy = null
          /****
           * If it doesn't exist it will be loaded to the menu
           * */
          if (routeToCopy === undefined) {
            let path = data.path
            let pathSplited = path.split('/')
            pathSplited.pop()
            pathSplited = pathSplited.join('/')
            let found = null
            let foundFinal = null
            let foundChildren = null
            _.forEach(store.state.routeList, function (fathers) { // eslint-disable-line no-undef
              found = _.includes(fathers['path'], pathSplited)
              if (fathers['children'] !== undefined) {
                foundChildren = _.some(fathers['children'], {'pathChildren': pathSplited})
                if (foundChildren) {
                  routeToCopy = fathers
                  childRouteToCopy = _.find(fathers['children'], {'pathChildren': pathSplited})
                }
              }
              if (found) {
                foundFinal = found
                routeToCopy = fathers
              }
            })
            if (foundFinal || foundChildren) {
              if (routeToCopy !== undefined) {
                let routesLocal = {
                  description: routeToCopy.description,
                  path: path,
                  father: routeToCopy.index,
                  index: path,
                  custom: true,
                  permission: routeToCopy.permission,
                  route: {
                    name: data.name,
                    params: {
                      id: data.params.id
                    }
                  }
                }
                
                if (routeToCopy.children !== undefined && foundChildren && childRouteToCopy !== null) {
                  if (childRouteToCopy.pathChildren !== '/groups') {
                    routesLocal.father = childRouteToCopy.pathChildren
                  }
                  routesLocal.description = childRouteToCopy.description
                  routesLocal.permission = childRouteToCopy.permission
                }
                store.commit('ADD_MENU', routesLocal)
                resolve(routesLocal)
              }
            } else {
              _.forEach(store.state.routeList, function (routesLocal) { // eslint-disable-line no-undef
                let found = _.includes(data.path, routesLocal.path) // eslint-disable-line no-undef
                if (found && routesLocal.description !== 'CRM') {
                  /****
                   * If it doesn't exist it will be loaded to the menu
                   * */
                  let createMenu = {
                    description: routesLocal.description,
                    path: path,
                    father: routesLocal.path,
                    index: path,
                    custom: true,
                    permission: data.permission,
                    route: {
                      name: data.name,
                      params: {
                        id: data.params.id
                      }
                    }
                  }
                  store.commit('ADD_MENU', createMenu)
                  resolve(createMenu)
                }
              })
            }
            resolve()
          }
        }
      } else {
        resolve()
      }
    }).then(function (response) { return response })
  },
  GET_FIRST_ROUTES: function (store, data) {
    /**
     * Load the object to go to menu
     *
     * The object has
     *   route: {
     *     name: 'Dashboard',
     *     id: ''
     *   }
     *   because it will be loaded new tabs with params from business and account menus
     *   and when loading that options it has the same format so it can pass params when calling :route()
     *
     *   IT MUST HAVE ID BECAUSE WHEN COMPARING IF EXISTS ANY ITEM WITH THE NEW ID IT GIVES UNDEFINED
     *   ERROR BECAUSE CANT COMPARE TO THESE ITEMS
     * */
    
    let routeList = [
      {
        description: 'CRM',
        path: '',
        index: '/',
        permission: 'crm_overview',
        route: {
          name: 'Dashboard',
          params: {
            id: ''
          }
        }
      },
      /** Businesses */
      {
        description: 'BUSINESS',
        path: '/businesses',
        index: '/businesses',
        permission: 'crm_businesses',
        route: {
          name: 'businessesList',
          params: {
            id: ''
          }
        }
      },
      /** ACCOUNTS */
      {
        description: 'ACCOUNTS',
        path: '/accounts',
        index: '/accounts',
        permission: 'crm_companies',
        route: {
          name: 'accountsTableList',
          params: {
            id: ''
          }
        },
        children: [
          {
            pathChildren: '/persons',
            description: 'PERSON',
            name: 'personsTableList',
            permission: 'crm_persons'
          },
          {
            pathChildren: '/accounts',
            description: 'COMPANY',
            name: 'accountsTableList',
            permission: 'crm_companies'
          },
          {
            pathChildren: '/groups',
            description: 'GROUP',
            name: 'groupShow',
            permission: 'crm_companies'
          }
        ]
      },
      {
        description: 'REPORTS_AND_CONTACTS',
        path: '/reports-and-contacts',
        index: '/reports-and-contacts',
        permission: 'crm_reports',
        route: {
          name: 'ReportsAndContactsList',
          params: {
            id: ''
          }
        }
      },
      {
        description: 'COMMERCIAL_OBJECTIVES',
        path: '/commercial-goals',
        index: '/commercial-goals',
        permission: 'crm_objectives',
        route: {
          name: 'businessGoals',
          params: {
            id: ''
          }
        }
      }
    ]
    
    store.commit('SET_ROUTES', routeList)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
