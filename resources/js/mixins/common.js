import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      permissions: 'generic/PERMISSIONS',
      languages: 'generic/LANGUAGES'
    })
  },
  methods: {
    limitText (count) {
      return ` + ${count} `
    },
    checkPermissions (func, type) {
      return this.$helpers.checkACL({
        permissions: this.permissions,
        func: func,
        type: type
      })
    },
    convertToFormData (data) {
      let formData = new FormData()
      _.forEach(data, (value, key) => {
        if (value) {
          // validate if we are sending a property that its a list
          // of files, in this case we can't stringify the array
          if (key === 'files' && _.isArray(value)) {
            _.forEach(value, (item) => {
              formData.append(item.name, item.file, encodeURI(item.file.name))
            })
          } else {
            // try parse the rest of properties
            if (!(value instanceof File)) {
              formData.append(key, JSON.stringify(value))
            } else {
              formData.append(key, value, encodeURI(value.name))
            }
          }
        }
      })
      return formData
    },
    capitalizeWords (string) {
      let lower = String(string).toLowerCase()
      return lower.replace(/(^|\s|[\-\,\.\(\"\'\ª\º\-\_\#\$\%\*\+\-\{\\\/\&\<\>\])(^|\s|[\-\,\.\(\"\'\ª\º\-\_\#\$\%\d])[A-Z\u00C0-\u00DC]/gim, function (match) { // eslint-disable-line no-useless-escape
        return match.toUpperCase()
      })
    },
    changeDescriptionUpdated (changedAt, changedBy) {
      return this.languages.UPDATED + ': ' + changedAt + ' ' + this.languages.BY + ' ' + changedBy
    },
    changeDescriptionPersisted (changedAt) {
      return this.languages.SAVED + ': ' + changedAt + ' '
    },
    checkIsEmpty (object) {
      return !_.isEmpty(object)
    }
  }
}
