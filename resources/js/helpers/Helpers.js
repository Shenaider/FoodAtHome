export default {
  /**
   * set the locale storage information for search filters
   * based on field name and data
   *
   * @param {string} field name of field we want to save on local storage
   * @param {object} data object with the information we want to save on local storage
   */
  setFilters: function (field, data) {
    var item = JSON.parse(localStorage.getItem(field))
    if (item) {
      return JSON.parse(localStorage.getItem(field))
    } else {
      localStorage.removeItem(field)
      localStorage.setItem(field, JSON.stringify(data))
      return JSON.parse(localStorage.getItem(field))
    }
  },
  checkACL (args) {
    return _.some(args.permissions, function (accessInfo) {
      return accessInfo.ui_tag === args.func && accessInfo[args.type] === 1
    })
  }
}
